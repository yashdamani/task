const express = require("express");
const Router = express.Router();
const path = require("path");
const Data = require("../model/dataSchema");

Router.get("/", function(req, res) {
  console.log("heyyyy");
  res.sendFile(path.join(__dirname + "/../view/loancalc.html"));
}).post("/", function(req, res) {
  console.log("hey");
  var data = new Data();

  data.principle = req.body.principle;
  data.rate = req.body.rate;
  data.time = req.body.time;
  data.save(function(err) {
    if (err) throw err;
    res.json({ Data: "Success" });
  });
});

module.exports = Router;
