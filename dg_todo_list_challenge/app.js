const express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express(),
  port = 8080

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method
  }
}));

let todolist = [];

app.get('/todo', function (req, res) {
  res.render('todo.ejs', {
    todolist,
    clickHandler: "func1();"
  });
})

  .post('/todo/add/', function (req, res) {
    if (req.body.newtodo != '') {
      todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
  })

  .get('/todo/delete/:id', function (req, res) {
    if (req.params.id != '') {
      todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
  })

  .get('/todo/:id', function (req, res) {
    let todoIdx = req.params.id;
    let todo = todolist[todoIdx];

    if (todo) {
      res.render('edititem.ejs', {
        todoIdx,
        todo,
        clickHandler: "func1();"
      });
    } else {
      res.redirect('/todo');
    }
  })

  .put('/todo/edit/:id', function (req, res) {
    let todoIdx = req.params.id;
    let editTodo = req.body.editTodo;
    if (todoIdx != '' && editTodo != '') {
      todolist[todoIdx] = editTodo;
    }
    res.redirect('/todo');
  })

  .use(function (req, res, next) {
    res.redirect('/todo');
  })

  .listen(port, function () {
    console.log(`DataGuard TODO list challenge running on http://0.0.0.0:${port}`)
  });

module.exports = app;
