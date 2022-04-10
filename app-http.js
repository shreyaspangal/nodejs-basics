// File: app-html.js
const express = require("express");
let app = express();

const port = 8081;

app.use(express.json());

let todoList = ["Complete Node Byte", "Play Cricket", "Learn express.js"];

app
  .route("/todos")
  .get((req, res) => {
    const { method, url } = req;
    res.send(todoList);
  })
  .post((req, res) => {
    let name = req.body.name;
    todoList.push(name);
    res.status(201).end();
  })
  .delete((req, res) => {
    let name = req.body.name;
    let newTodoList = todoList.filter((item) => item !== name);

    todoList = newTodoList;
    res.status(204).send();
  })
  .all((req, res) => {
    res.status(501).send("Method not allowed");
  });

app.all("*", (req, res) => {
  res.status(404);
  res.send("No such page exists, kindly redirect to '/todos'");
});

//      <p>${req.params}</p>
//      <p>${req.query}</p>
//      <p>${req.body}</p>`;

app.listen(port, () => {
  // Log text to the terminal once the server starts

  console.log(`Nodejs server started on port ${port}`);
});
