const menusDAO = require("../models/menuModel");
const userDao = require("../models/userModel.js");
const { login } = require('../auth/auth')

const db = new menusDAO();
db.init();

exports.activeLunchMenu = async function (req, res) {

  let specStarter;
  let specMain;
  let starters;
  let mains;
  let desserts;

  db.getActiveLunchSpecialStarter()
    .then((list) => {
      console.log("Lunch promise 1 resolved", list)
      specStarter = list;
      return db.getActiveLunchSpecialMain();
    }).then((list => {
      console.log("Lunch promise 2 resolved", list)
      specMain = list;
      return db.getActiveLunchStarters();
    })).then((list => {
      console.log("Lunch promise 3 resolved", list)
      starters = list;
      return db.getActiveLunchMains();
    })).then((list => {
      console.log("Lunch promise 4 resolved", list)
      mains = list;
      return db.getActiveLunchDesserts();
    })).then((list => {
      console.log("Lunch promise 5 resolved", list)
      desserts = list;
      res.render("menu", {
        title: "LUNCH MENU",
        specialsStarter: specStarter,
        specialsMain: specMain,
        starters: starters,
        mains: mains,
        desserts: desserts,
      });
    }))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.activeDinnerMenu = async function (req, res) {

  let specStarter;
  let specMain;
  let starters;
  let mains;
  let desserts;

  db.getActiveDinnerSpecialStarter()
    .then((list) => {
      console.log("Dinner promise 1 resolved", list)
      specStarter = list;
      return db.getActiveDinnerSpecialMain();
    }).then((list => {
      console.log("Dinner promise 2 resolved", list)
      specMain = list;
      return db.getActiveDinnerStarters();
    })).then((list => {
      console.log("Dinner promise 3 resolved", list)
      starters = list;
      return db.getActiveDinnerMains();
    })).then((list => {
      console.log("Dinner promise 4 resolved", list)
      mains = list;
      return db.getActiveDinnerDesserts();
    })).then((list => {
      console.log("Dinner promise 5 resolved", list)
      desserts = list;
      res.render("menu", {
        title: "DINNER MENU",
        specialsStarter: specStarter,
        specialsMain: specMain,
        starters: starters,
        mains: mains,
        desserts: desserts,
      });
    }))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.activeRegionalMenu = async function (req, res) {

  let starters;
  let mains;
  let desserts;

  db.getActiveRegionalStarters()
    .then((list) => {
      console.log("Regional promise 1 resolved", list)
      starters = list;
      return db.getActiveRegionalMains();
    }).then((list => {
      console.log("Regional promise 2 resolved", list)
      mains = list;
      return db.getActiveRegionalDesserts();
    })).then((list => {
      console.log("Regional promise 3 resolved", list)
      desserts = list;
      res.render("menu", {
        title: "REGIONAL MENU",
        starters: starters,
        mains: mains,
        desserts: desserts,
      });
    }))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

//FOR ADMIN LOGIN AND INTERACTION
exports.show_login_page = function (req, res) {
  res.render("user/login");
};

exports.handle_login = function (req, res) {
  // res.redirect("/new");
  res.render("newLogin", {
    title: "Admin Login",
    user: "user",
    //user: req.cookies.jwt.username,
  });
};