const menusDAO = require("../models/menuModel");
const userDao = require("../models/userModel.js");

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
  res.render("admin", {
    user: "user",
  });

};


exports.displayAllMenuItems = async function (req, res) {

  let lunchSpecialStarter;
  let lunchSpecialMain;
  let lunchStarters;
  let lunchMains;
  let lunchDesserts;
  let dinnerSpecialStarter;
  let dinnerSpecialMain;
  let dinnerStarters;
  let dinnerMains;
  let dinnerDesserts;
  let regionalStarters;
  let regionalMains;
  let regionalDesserts;
  console.log("testing for error 1");
  //chain promises get all lunch/dinner/regional dishes disregarding active status
  db.getAllLunchSpecialStarter()
    .then((list) => {
      console.log("All dishes promise 1 resolved", list)
      lunchSpecialStarter = list;
      return db.getAllLunchSpecialMain();
    }).then((list => {
      console.log("All dishes promise 2 resolved", list)
      lunchSpecialMain = list;
      return db.getAllLunchStarters();
    })).then((list => {
      console.log("All dishes promise 3 resolved", list)
      lunchStarters = list;
      return db.getAllLunchMains();
    })).then((list => {
      console.log("All dishes promise 4 resolved", list)
      lunchMains = list;
      return db.getAllLunchDesserts();
    })).then((list => {
      console.log("All dishes promise 5 resolved", list)
      lunchDesserts = list;
      return db.getAllDinnerSpecialStarter();
    })).then((list) => {
      console.log("All dishes promise 6 resolved", list)
      dinnerSpecialStarter = list;
      return db.getAllDinnerSpecialMain();
    }).then((list => {
      console.log("All dishes promise 7 resolved", list)
      dinnerSpecialMain = list;
      return db.getAllDinnerStarters();
    })).then((list => {
      console.log("All dishes promise 8 resolved", list)
      dinnerStarters = list;
      return db.getAllDinnerMains();
    })).then((list => {
      console.log("All dishes promise 9 resolved", list)
      dinnerMains = list;
      return db.getAllDinnerDesserts();
    })).then((list => {
      console.log("All dishes promise 10 resolved", list)
      dinnerDesserts = list;
      return db.getAllRegionalStarters();
    })).then((list => {
      console.log("All dishes promise 11 resolved", list)
      regionalStarters = list;
      return db.getAllRegionalMains();
    })).then((list => {
      console.log("All dishes promise 12 resolved", list)
      regionalMains = list;
      return db.getAllRegionalDesserts();
    })).then((list => {
      console.log("All dishes promise 13 resolved", list)
      regionalDesserts = list;
      res.render("admin-menu-items", {
        user: "user",
        lunchSpecialStarter: lunchSpecialStarter,
        lunchSpecialMain: lunchSpecialMain,
        lunchStarters: lunchStarters,
        lunchMains: lunchMains,
        lunchDesserts: lunchDesserts,
        dinnerSpecialStarter: dinnerSpecialStarter,
        dinnerSpecialMain: dinnerSpecialMain,
        dinnerStarters: dinnerStarters,
        dinnerMains: dinnerMains,
        dinnerDesserts: dinnerDesserts,
        regionalStarters: regionalStarters,
        regionalMains: regionalMains,
        regionalDesserts: regionalDesserts,
      });
    }))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.editDinnerMenu = async function (req, res) {

  let dinnerSpecialStarter;
  let dinnerSpecialMain;
  let dinnerStarters;
  let dinnerMains;
  let dinnerDesserts;

  db.getAllDinnerSpecialStarter()
    .then((list) => {
      console.log("All dishes promise 1 resolved", list)
      dinnerSpecialStarter = list;
      return db.getAllDinnerSpecialMain();
    }).then((list => {
      console.log("All dishes promise 2 resolved", list)
      dinnerSpecialMain = list;
      return db.getAllDinnerStarters();
    })).then((list => {
      console.log("All dishes promise 3 resolved", list)
      dinnerStarters = list;
      return db.getAllDinnerMains();
    })).then((list => {
      console.log("All dishes promise 4 resolved", list)
      dinnerMains = list;
      return db.getAllDinnerDesserts();
    })).then((list => {
      console.log("All dishes promise 5 resolved", list)
      dinnerDesserts = list;
      res.render("admin-dinner-menu", {
        user: 'user',
        dinnerSpecialStarter: dinnerSpecialStarter,
        dinnerSpecialMain: dinnerSpecialMain,
        dinnerStarters: dinnerStarters,
        dinnerMains: dinnerMains,
        dinnerDesserts: dinnerDesserts,
      });
    }))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};
exports.editRegionalMenu = async function (req, res) {

  let regionalStarters;
  let regionalMains;
  let regionalDesserts;

  db.getAllRegionalStarters()
    .then((list => {
      console.log("All dishes promise 11 resolved", list)
      regionalStarters = list;
      return db.getAllRegionalMains();
    })).then((list => {
      console.log("All dishes promise 12 resolved", list)
      regionalMains = list;
      return db.getAllRegionalDesserts();
    })).then((list => {
      console.log("All dishes promise 13 resolved", list)
      regionalDesserts = list;
      console.log("error testing 123");
      res.render("admin-regional-menu", {
        user: 'user',
        regionalStarters: regionalStarters,
        regionalMains: regionalMains,
        regionalDesserts: regionalDesserts,
      });
    }))
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

//////////////
exports.displayMenuItem = async function (req, res) {
  const id = req.params.id;
  db.getDish(id)
    .then((dish) => {
      res.render("updateDish", {
        user: "user",
        dish: dish,
      });
    })
    .catch((err) => {
      console.log("Error: ");
      console.log(JSON.stringify(err));
    });
};

/* Functions for updating a menu item */
exports.updateMenuDish = async function (req, res) {
  const id = req.params.id;
  const name = req.params.dishName;
  const description = req.body.dishDesc;
  const ingredients = req.body.dishIngr;
  const allergens = req.body.dishAllergens;
  const price = req.body.dishPrice;
  const menu = req.body.dishMenu;
  const course = req.body.dishCourse;
  const chefSpecial = req.body.dishSpecials;
  const active = req.body.dishActive;
  db.updateDish(id, name, description, ingredients, allergens, price, menu, course, chefSpecial, active)
  res.render("admin", {
    user: "user",
  });
};

/* Functions for deleting a menu item */
exports.deleteMenuDish = async function (req, res) {
  const id = req.params.id;
  db.deleteDish(id)
  res.render("admin", {
    user: "user",
  });
};

exports.logout = function (req, res) {
  res.clearCookie("jwt").status(200).redirect("/");
}