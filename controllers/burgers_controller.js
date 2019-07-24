var express = require("express");
var route = express.Router();
import Burger from "../models/burger.js";

// making the default route redirect to the "/burgers" route
route.get("/", function(req, res) {
  res.redirect("/burgers");
});

// relays current information from the burgers table
route.get("/burgers", function(req, res) {
  Burger.select(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

route.post("/burgers/create", function(req, res) {
  Burger.insert(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

route.put("/burgers/:id", function(req, res) {
  Burger.update(req.body.burger_name, req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = route;
