const menusDAO = require("../models/menuModel");
const userDao = require("../models/userModel.js");
const { login } = require('../auth/auth')

const db = new menusDAO();
db.init();

exports.activeLunchMenu = function (req, res) {
  db.getActiveLunchSpecialStarters()
    .then((list) => {
      res.render("lunchMenu", {
        title: "Lunch Menu",
        specialsStarter: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveLunchSpecialMains()
    .then((list) => {
      res.render("lunchMenu", {
        specialsMain: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveLunchStarters()
    .then((list) => {
      res.render("lunchMenu", {
        starters: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveLunchMains()
    .then((list) => {
      res.render("lunchMenu", {
        mains: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveLunchDesserts()
    .then((list) => {
      res.render("lunchMenu", {
        desserts: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
}

exports.activeDinnerMenu = function (req, res) {
  db.getActiveDinnerSpecialStarters()
    .then((list) => {
      res.render("dinnerMenu", {
        title: "Dinner Menu",
        specialsStarter: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveDinnerSpecialMains()
    .then((list) => {
      res.render("dinnerMenu", {
        specialsMain: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveDinnerStarters()
    .then((list) => {
      res.render("dinnerMenu", {
        starters: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveDinnerMains()
    .then((list) => {
      res.render("dinnerMenu", {
        mains: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveDinnerDesserts()
    .then((list) => {
      res.render("dinnerMenu", {
        desserts: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
}

exports.activeRegionalMenu = function (req, res) {
    db.getActiveRegionalStarters()
    .then((list) => {
      res.render("regionalMenu", {
        title: "Regional Menu",
        starters: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveRegionalMains()
    .then((list) => {
      res.render("regionalMenu", {
        mains: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });

    db.getActiveRegionalDesserts()
    .then((list) => {
      res.render("regionalMenu", {
        desserts: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
}
////////
/*
exports.activeLunchMenu = async function (req, res) {
  const specialsStarter = await menusDAO.where({ menu: lunch, course: starter, chefSpecial: true, active: true });
  const specialsSMain = await menusDAO.where({ menu: lunch, course: starter, chefSpecial: true, active: true });
  const starters = await menusDAO.where({ menu: lunch, course: starter, chefSpecial: false, active: true });
  const mains = await menusDAO.where({ menu: lunch, course: main, chefSpecial: false, active: true });
  const desserts = await menusDAO.where({ menu: lunch, course: dessert, chefSpecial: false, active: true });
    res.render("lunch", { specialsStarter, specialsSMain, starters, mains, desserts });
}
*/
//Lunch Menu Page
/*
exports.active_lunch_special_starters = function (req, res) {

}
exports.active_lunch_special_mains = function (req, res) {

}
exports.active_lunch_starters = function (req, res) {

}
exports.active_lunch_mains = function (req, res) {

}
exports.active_lunch_desserts = function (req, res) {

}
*/
//Dinner Menu Page
/*
exports.active_dinner_special_starters = function (req, res) {

}
exports.active_dinner_special_mains = function (req, res) {

}
exports.active_dinner_starters = function (req, res) {

}
exports.active_dinner_mains = function (req, res) {

}
exports.active_dinner_desserts = function (req, res) {

}

//Regional Menu Page
exports.active_regional_starters = function (req, res) {

}
exports.active_regional_mains = function (req, res) {

}
exports.active_regional_desserts = function (req, res) {

}
*/

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