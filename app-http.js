// File: app-html.js
const express = require("express");
let app = express();

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket", "Learn express.js"];

app
  .get("/todos", (req, res) => {
    const { method, url } = req;
    res.send(`<h1>TODO LIST</h1> <p>${todoList.toString()}</p>`);
  })
  .listen(port, () => {
    // Log text to the terminal once the server starts

    console.log(`Nodejs server started on port ${port}`);
  });
