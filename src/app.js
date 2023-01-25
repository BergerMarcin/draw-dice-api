const envFound = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

if (envFound.error) {
  console.log("\x1b[31m%s\x1b[0m", "ERROR. Could not find .env file");
  process.exit(1);
}
const debugMsg = require("./utils/debug-msg");

const port = process.env.PORT;
const app = express();

// debugging
app.use((req, res, next) => {
  debugMsg("log", `Path: ${req.path}, method: ${req.method}`);
  next();
});

// cors
app.use(
  cors({
    credentials: true,
    origin: [process.env.WHITE_LIST.split(", ")],
  }),
);

// test
app.get("/", (req, res) => {
  debugMsg("log", " - server is working");
  res.send("Server is working");
});

// serving result of dice draw (NOTE: dice dots count === `:id`)
app.get("/draw-dice/:id", (req, res) => {
  const drawDiceResult = Math.floor(Math.random() * req.params.id) + 1;
  debugMsg("log", ` - id: ${req.params.id}; Result: ${drawDiceResult}`);
  res.json({ value: drawDiceResult });
});

// serving images
app.use("/images", express.static(path.resolve(process.cwd(), "public")));

// 404
app.get("/*", (req, res) => {
  debugMsg("warn", " - result: STATUS 404");
  res.status(404).end("404. Page not found");
});

app.listen(port, () => {
  debugMsg("log", `Example app listening on port ${port}`);
  debugMsg("log", path.resolve(process.cwd(), "public"));
});
