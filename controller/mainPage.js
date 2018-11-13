const express = require("express");
const Router = express.Router();
const path = require("path");
const Data = require("../model/dataSchema");

Router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../view/loancalc.html"));
}).post("/", function(req, res) {
  var data = new Data();

  data.principle = req.body.principle;
  data.rate = req.body.rate;
  data.time = req.body.time;
  data.save(function(err) {
    if (err) throw err;
    console.log("Success");
  });
});

module.exports = Router;
