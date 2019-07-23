var express = require("express");
var route = express.Router();
import burger from "../models/burger.js";

// making the default route redirect to the "/burgers" route
route.get("/", function (req, res) {
    res.redirect("/burgers");
});

// relays current information from the burgers table
router.get("/burgers", function(req, res) {
    burger.select(function(burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});

router.post("/burgers/create", function (req, res) {

})

