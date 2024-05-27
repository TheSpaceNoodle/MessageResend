import http from "http";

export default keepAlive = () => {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("ok");
    })
    .listen(3000);
};
