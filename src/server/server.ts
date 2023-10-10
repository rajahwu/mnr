import express from "express";

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.static("public"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, () => {
  console.info(`Express server is listening on ${PORT} 🚀`);
});
