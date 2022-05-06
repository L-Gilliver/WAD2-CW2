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


exports.editLunchMenu = async function (req, res) {

  let lunchSpecialStarter;
  let lunchSpecialMain;
  let lunchStarters;
  let lunchMains;
  let lunchDesserts;

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
      res.render("admin-lunch-menu", {
        user: 'user',
        lunchSpecialStarter: lunchSpecialStarter,
        lunchSpecialMain: lunchSpecialMain,
        lunchStarters: lunchStarters,
        lunchMains: lunchMains,
        lunchDesserts: lunchDesserts,
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
exports.updateLunchMenu = async function (req, res) {
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
exports.updateDinnerMenu = async function (req, res) {
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
exports.updateRegionalMenu = async function (req, res) {
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
exports.updateLunchMenuDish = async function (req, res) {
  const id = req.params.id;
  const name = req.params.name;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const allergens = req.body.allergens;
  const price = req.body.price;
  const menu = req.body.menu;
  const course = req.body.course;
  const chefSpecial = req.body.chefSpecial;
  const active = req.body.active;
  db.updateDish(id, name, description, ingredients, allergens, price, menu, course, chefSpecial, active)
  .then(() => {
    res.render("admin", {
        user: "user",
    });
  })
  .catch((err) => {
    console.log("Error: ");
    console.log(JSON.stringify(err));
  });
};

exports.updateDinnerMenuDish = async function (req, res) {
  const id = req.params.id;
  const name = req.params.name;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const allergens = req.body.allergens;
  const price = req.body.price;
  const menu = req.body.menu;
  const course = req.body.course;
  const chefSpecial = req.body.chefSpecial;
  const active = req.body.active;
  db.updateDish(id, name, description, ingredients, allergens, price, menu, course, chefSpecial, active)
  .then(() => {
    res.render("admin", {
        user: "user",
    });
  })
  .catch((err) => {
    console.log("Error: ");
    console.log(JSON.stringify(err));
  });
};

exports.updateRegionalMenuDish = async function (req, res) {
  const id = req.params.id;
  const name = req.params.name;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const allergens = req.body.allergens;
  const price = req.body.price;
  const menu = req.body.menu;
  const course = req.body.course;
  const chefSpecial = req.body.chefSpecial;
  const active = req.body.active;
  db.updateDish(id, name, description, ingredients, allergens, price, menu, course, chefSpecial, active)
  .then(() => {
    res.render("admin", {
        user: "user",
    });
  })
  .catch((err) => {
    console.log("Error: ");
    console.log(JSON.stringify(err));
  });
};

/* Functions for deleting a menu item */
exports.deleteLunchMenuDish = async function (req, res) {
  const id = req.params.id;
  db.deleteDish(id)
  .then(() => {
    res.render("admin", {
        user: "user",
    });
  })
  .catch((err) => {
    console.log("Error: ");
    console.log(JSON.stringify(err));
  });
};

exports.deleteDinnerMenuDish = async function (req, res) {
  const id = req.params.id;
  db.deleteDish(id)
  .then(() => {
    res.render("admin", {
        user: "user",
    });
  })
  .catch((err) => {
    console.log("Error: ");
    console.log(JSON.stringify(err));
  });
};

exports.deleteRegionalMenuDish = async function (req, res) {
  const id = req.params.id;
  db.deleteDish(id)
  .then(() => {
    res.render("admin", {
        user: "user",
    });
  })
  .catch((err) => {
    console.log("Error: ");
    console.log(JSON.stringify(err));
  });
};

exports.logout = function (req, res) {
  res.clearCookie("jwt").status(200).redirect("/");
}