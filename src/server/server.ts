import express from "express";
import cors from "cors";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

const server = express();
server.use(cors());

server.use(express.static("public"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.use("/", async (req, res) => {
  const { initialMarkup } = await serverRender();
  res.render("index", {
    initialMarkup
  });
});

server.listen(Number(config.PORT), config.HOST, () => {
  console.info(
    `Express server is running at ${config.SERVER_URL} 🚀`,
    `Free Men ${os.freemem() / 1024 / 1024}`
  );
});
