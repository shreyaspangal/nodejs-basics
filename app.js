// File: app.js

const http = require("http");

const port = 8081;

let todoList = ["Complete Node Byte", "Play Cricket"];

http
  .createServer((request, response) => {
    const { method, url } = request;

    if (url == "/todos") {
      if (method == "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        //Content
        response.write("<h1>TODO</h1>");
        response.write(todoList.toString());
        //Display in order
        todoList.map((item, index) =>
          response.write(`<p>${index + 1}. ${item}</p>`)
        );
        // Tell the server the response is complete and to close the connection
        response.end(`<hr/> Total items - ${todoList.length}`);
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
            todoList.push(body.name);
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
