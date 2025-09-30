const http = require("http");
const orderController = require("./controllers/order");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    console.log(orderController.getIndex(req, res));
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(8000);
