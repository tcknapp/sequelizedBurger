var express = require("express");
var app = express();

// Import the DB model
var db = require("../models");

// Routes
module.exports = function (app) {

  //Get All/index
  app.get("/", function (req, res) {
    db.burgers.findAll({}).then(function (data) {
      var hbsObject = {
        burgers: data
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  //Post/create burger to API
  app.post("/", function (req, res) {
    db.burgers.create({
      burger_name: req.body.name,
    }).then(function () {
      res.redirect("/");
    });
  });

  //Put Burger route
  app.put("/:id", function (req, res) {

    //to Update
    db.burgers.update({
      devoured: true,
    }, {
        where: {
          id: req.params.id
        }
      }).then(function () {
        res.redirect("/");
        //res.json(data);
      });
  });
};
