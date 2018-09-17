//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")

//Express app
var app = express();
var PORT = process.env.PORT || 8080;

//Require Models for sync
var db = require("./models");

// Require Express-Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(methodOverride("_method"));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes (controller)
require("./controllers/burger_controller.js")(app);

//Sync Sequelize model, then start Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
