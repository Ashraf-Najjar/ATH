const express = require("express");
const { authenticateRest } = require("./middleware");

const app = express();

app.get("/profile", authenticateRest, (req, res) => {
  res.json({ message: "User authenticated", user: req.user });
});
