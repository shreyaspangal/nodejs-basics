// File: app.js

const http = require("http");

const port = 8081;

http
  .createServer((request, response) => {
    const { method, url } = request;
    if (url === "/todos" && method === "GET") {
      // Set response status code and response headers
      response.writeHead(200, { "Content-Type": "text/html" });
      // Set response body i.e, data to be sent
      response.write("<h1>TODO</h1>");
      response.write("<h2>Created by Shreyas Pangal</h2>");
      response.write(`<p>Method: <strong>${method}</strong></p>`);
      response.write(`<p>Url: <strong>${url}</strong></p>`);
      // Tell the server the response is complete and to close the connection
      response.end("- Success");
    } else if (method !== "GET") {
      response.statusCode = 500;
      response.end("Not Implemented");
    } else if (url !== "/todos") {
      response.statusCode = 404;
      response.end("Not Found");
    }

    //Method -2
    // if (url == "/todos") {
    //   if (method == "GET") {
    //     response.writeHead(200, { "Content-Type": "text/html" });

    //     response.write("<h1>TODO</h1>");

    //     response.write("<p>Created by: Crio.Do</p>");
    //   } else {
    //     response.writeHead(501);
    //   }
    // } else {
    //   response.writeHead(404);
    // }

    // response.end();
  })
  .listen(port, () => {
    // Log text to the terminal once the server starts

    console.log(`Nodejs server started on port ${port}`);
  });
