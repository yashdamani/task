const express = require("express");
const Router = express.Router();
const Data = require("../model/dataSchema");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/SI_Data",
  {
    useNewUrlParser: true
  }
);

Router.get("/", function(req, res) {
  Data.find({}, function(err, users) {
    if (err) throw err;
    res.json(users);
  });
});
module.exports = Router;
