import express from "express";

const server = express();

export const startServer = () => {
  server.all("/", () => {});

  return server.listen("3000", () => console.log("server is ready"));
};
