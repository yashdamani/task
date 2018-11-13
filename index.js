const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainPage = require("./controller/mainPage");
const mongoose = require("mongoose");

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", mainPage);

mongoose.connect(
  "mongodb://127.0.0.1:27017/SI_Data",
  { useNewUrlParser: true },
  function(err) {
    if (err) throw err;
    console.log("Database connected!");
  }
);

app.listen(port, function(err) {
  if (err) throw err;
  console.log(`Server running on ${port}!`);
});
