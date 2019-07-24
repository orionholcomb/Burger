// PACKAGES
var express = require("express");
var handlebars = require("express-handlebars");
// ROUTES
var routes = require("./controllers/burgers_controller.js");
// VARIABLES
var port = 3000;
var app = express();

// tells express to serve handlebars from the controller, then console logs the address of the server
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
app.listen(port, function() {
  console.log("Server is running on localhost:" + port);
});
