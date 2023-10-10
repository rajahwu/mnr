import express from "express";
import os from "node:os";

import config from "./config"; "./config";

const server = express();

server.use(express.static("public"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    content: "EJS is <em>cool</em>",
  });
});

server.listen(config.PORT, () => {
  console.info(
    `Express server is running at ${config.SERVER_URL} 🚀`,
    `Free Men ${os.freemem() / 1024 / 1024}`
  );
});
