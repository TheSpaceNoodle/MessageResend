import express from "express";

const server = express();

export const startServer = () => {
  server.all("/", (_, res) => {
    res.send("Works");
  });

  return server.listen("8080", () => console.log("server is ready"));
};
