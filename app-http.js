// File: app-html.js
const express = require("express");

const http = require("http");

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket", "Learn express.js"];

http
  .createServer((request, response) => {
    const { method, url } = request;

    if (url === "/todos") {
      if (method == "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        //Content
        response.write("<h1>TODO</h1>");
        response.write(todoList.toString());
        // Tell the server the response is complete and to close the connection
        response.end();
      } else if (method === "POST") {
        let body = "";
        request
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let newTodo = body.name;
            todoList.push(newTodo);
            //Status Code
            response.writeHead(201);
          });
      } else if (method === "DELETE") {
        let body = "";
        request
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let deleteTodo = body.name;

            for (let i = 0; i < todoList.length; i++) {
              if (todoList[i] === deleteTodo) {
                todoList.splice(i, 1);
              }
            }
            //Status Code
            response.writeHead(204);
          });
      } else {
        response.writeHead(501);
      }
    } else {
      response.writeHead(404);
    }

    response.end();
  })
  .listen(port, () => {
    // Log text to the terminal once the server starts

    console.log(`Nodejs server started on port ${port}`);
  });
