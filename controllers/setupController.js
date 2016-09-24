var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
       // seed database
       var starterTodos = [
           {
               username: 'biv',
               todo: 'Smack it up',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'ronnie',
               todo: 'Flip it',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'ricky',
               todo: 'Rub it down',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       })
    });
}