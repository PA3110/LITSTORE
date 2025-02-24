const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("LitStore App!");
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
