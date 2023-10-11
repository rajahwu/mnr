import express from "express";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router"

const server = express();

server.use(express.static("public"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.use("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading..."
  });
});

server.listen(Number(config.PORT), config.HOST, () => {
  console.info(
    `Express server is running at ${config.SERVER_URL} 🚀`,
    `Free Men ${os.freemem() / 1024 / 1024}`
  );
});
