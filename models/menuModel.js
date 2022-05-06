const nedb = require('nedb');
class Menus {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    //a function to seed the database
    init() {
        this.db.insert({
            name: "Cod Fritters",
            description: 'Bite-sized fritters with garlic aioli.',
            ingredients: ['Cod', 'Potato', 'Eggs', 'Garlic', 'Lemon', 'Parsley'],
            allergens: ['Gluten'],
            price: '7.00',
            menu: 'lunch',
            course: 'starter',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Coley Salad",
            description: 'Fresh caught Coley served with baby potato and basil salad.',
            ingredients: ['Coley', 'Potato', 'Parmesan', 'Basil', 'Garlic', 'Salad Leaves', 'Onion', 'Peppers', 'Cucumber'],
            allergens: [],
            price: '14.50',
            menu: 'lunch',
            course: 'main',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Chicken Breast",
            description: 'Fresh caught Coley served with baby potato and basil salad.',
            ingredients: ['Coley', 'Potato', 'Parmesan', 'Basil', 'Garlic', 'Salad Leaves', 'Onion', 'Peppers', 'Cucumber'],
            allergens: [],
            price: '14.50',
            menu: 'lunch',
            course: 'main',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Lemon Posset",
            description: 'Flavourful citrus set pudding.',
            ingredients: ['Double Cream', 'Sugar', 'Lemon'],
            allergens: ['Dairy'],
            price: '4.00',
            menu: 'lunch',
            course: 'dessert',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Salmon Fishcakes",
            description: 'Salmon Fishcakes served with spinach puree and watercress.',
            ingredients: ['Salmon', 'Potato', 'Parsley', 'Garlic', 'Chives', 'Egg'],
            allergens: ['Egg'],
            price: '7.00',
            menu: 'lunch',
            course: 'starter',
            chefSpecial: 'true',
            active: 'true'
        });
        this.db.insert({
            name: "Cod Fritters",
            description: 'Bite-sized fritters with garlic aioli.',
            ingredients: ['Cod', 'Potato', 'Parsley', 'Garlic', 'Chives', 'Parsley'],
            allergens: ['Gluten'],
            price: '7.00',
            menu: 'lunch',
            course: 'main',
            chefSpecial: 'true',
            active: 'true'
        });
        console.log('db entry dishes added to lunch menu');
        /////////////
        this.db.insert({
            name: "Salmon Fishcakes",
            description: 'Salmon Fishcakes served with spinach puree and watercress.',
            ingredients: ['Salmon', 'Potato', 'Parsley', 'Garlic', 'Chives', 'Egg'],
            allergens: ['Egg'],
            price: '7.00',
            menu: 'dinner',
            course: 'starter',
            chefSpecial: 'true',
            active: 'true'
        });
        this.db.insert({
            name: "Venison & Fries",
            description: 'Scottish Venison steak served with homemade fries and stroganoff sauce.',
            ingredients: ['Venison', 'Potato', 'Onion', 'Garlic', 'Mushroom', 'Beef stock'],
            allergens: ['Gluten', 'Dairy'],
            price: '21.00',
            menu: 'dinner',
            course: 'main',
            chefSpecial: 'true',
            active: 'true'
        });
        this.db.insert({
            name: "Venison & Fries",
            description: 'Scottish Venison steak served with homemade fries and stroganoff sauce.',
            ingredients: ['Venison', 'Potato', 'Onion', 'Garlic', 'Mushroom', 'Beef stock'],
            allergens: ['Gluten', 'Dairy'],
            price: '21.00',
            menu: 'dinner',
            course: 'starter',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Venison & Fries",
            description: 'Scottish Venison steak served with homemade fries and stroganoff sauce.',
            ingredients: ['Venison', 'Potato', 'Onion', 'Garlic', 'Mushroom', 'Beef stock'],
            allergens: ['Gluten', 'Dairy'],
            price: '21.00',
            menu: 'dinner',
            course: 'main',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Venison & Fries",
            description: 'Scottish Venison steak served with homemade fries and stroganoff sauce.',
            ingredients: ['Venison', 'Potato', 'Onion', 'Garlic', 'Mushroom', 'Beef stock'],
            allergens: ['Gluten', 'Dairy'],
            price: '21.00',
            menu: 'dessert',
            course: 'main',
            chefSpecial: 'false',
            active: 'true'
        });

        console.log('db entry dishes added to dinner menu');

        ///////////
        this.db.insert({
            name: "Mango Sticky Rice",
            description: 'Mango sticky rice is a traditional Thai dessert.',
            ingredients: ['Rice', 'Coconut Water', 'Brown Sugar'],
            allergens: [],
            price: '6.00',
            menu: 'regional',
            course: 'starter',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Mango Sticky Rice",
            description: 'Mango sticky rice is a traditional Thai dessert.',
            ingredients: ['Rice', 'Coconut Water', 'Brown Sugar'],
            allergens: [],
            price: '6.00',
            menu: 'regional',
            course: 'main',
            chefSpecial: 'false',
            active: 'true'
        });
        this.db.insert({
            name: "Mango Sticky Rice",
            description: 'Mango sticky rice is a traditional Thai dessert.',
            ingredients: ['Rice', 'Coconut Water', 'Brown Sugar'],
            allergens: [],
            price: '6.00',
            menu: 'regional',
            course: 'dessert',
            chefSpecial: 'false',
            active: 'true'
        });
        console.log('db entry dishes added to regional menu');
    }

    /* Functions for finding active menu items to populate menu page */

    //LUNCH MENU
    //get chef specials starters for lunch menu
    getActiveLunchSpecialStarter() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'true', active: 'true' }, function (err, activeLunchSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchSpecialStarters);
                    console.log('getActiveLunchSpecialStarter() returns: ', activeLunchSpecialStarters);
                }
            })
        })
    }
    //get chef specials mains for lunch menu
    getActiveLunchSpecialMain() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'true', active: 'true' }, function (err, activeLunchSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchSpecialMains);
                    console.log('getActiveLunchSpecialMain() returns: ', activeLunchSpecialMains);
                }
            })
        })
    }
    //get starters for lunch menu
    getActiveLunchStarters() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeLunchStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchStarters);
                    console.log('getActiveLunchStarters() returns: ', activeLunchStarters);
                }
            })
        })
    }
    //get mains for lunch menu
    getActiveLunchMains() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeLunchMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchMains);
                    console.log('getActiveLunchMains() returns: ', activeLunchMains);
                }
            })
        })
    }
    //get desserts for lunch menu
    getActiveLunchDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeLunchDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchDesserts);
                    console.log('getActiveLunchDesserts() returns: ', activeLunchDesserts);
                }
            })
        })
    }

    //DINNER MENU
    //get chef special starters for dinner menu
    getActiveDinnerSpecialStarter() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'true', active: 'true' }, function (err, activeDinnerSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerSpecialStarters);
                    console.log('getActiveDinnerSpecialStarter() returns: ', activeDinnerSpecialStarters);
                }
            })
        })
    }
    //get chef specials mains for dinner menu
    getActiveDinnerSpecialMain() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'true', active: 'true' }, function (err, activeDinnerSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerSpecialMains);
                    console.log('getActiveDinnerSpecialMain() returns: ', activeDinnerSpecialMains);
                }
            })
        })
    }
    //get starters for dinner menu
    getActiveDinnerStarters() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeDinnerStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerStarters);
                    console.log('getActiveDinnerStarters() returns: ', activeDinnerStarters);
                }
            })
        })
    }
    //get mains for dinner menu
    getActiveDinnerMains() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeDinnerMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerMains);
                    console.log('getActiveDinnerMains() returns: ', activeDinnerMains);
                }
            })
        })
    }
    //get desserts for dinner menu
    getActiveDinnerDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeDinnerDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerDesserts);
                    console.log('getActiveDinnerDesserts() returns: ', activeDinnerDesserts);
                }
            })
        })
    }

    //REGIONAL MENU
    //get starters for regional menu
    getActiveRegionalStarters() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeRegionalStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeRegionalStarters);
                    console.log('getActiveRegionalStarters() returns: ', activeRegionalStarters);
                }
            })
        })
    }
    //get mains for regional menu
    getActiveRegionalMains() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeRegionalMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeRegionalMains);
                    console.log('getActiveRegionalMains() returns: ', activeRegionalMains);
                }
            })
        })
    }
    //get desserts for regional menu
    getActiveRegionalDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeRegionalDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeRegionalDesserts);
                    console.log('getActiveRegionalDesserts() returns: ', activeRegionalDesserts);
                }
            })
        })
    }

    /* Functions for getting all saved dishes */

    //LUNCH MENU
    //get chef specials starters for lunch menu
    getAllLunchSpecialStarter() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'true' }, function (err, lunchSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunchSpecialStarters);
                    console.log('getAllLunchSpecialStarter() returns: ', lunchSpecialStarters);
                }
            })
        })
    }
    //get chef specials mains for lunch menu
    getAllLunchSpecialMain() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'true' }, function (err, lunchSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunchSpecialMains);
                    console.log('getAllLunchSpecialMain() returns: ', lunchSpecialMains);
                }
            })
        })
    }
    //get starters for lunch menu
    getAllLunchStarters() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'false' }, function (err, lunchStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunchStarters);
                    console.log('getAllLunchStarters() returns: ', lunchStarters);
                }
            })
        })
    }
    //get mains for lunch menu
    getAllLunchMains() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'false' }, function (err, lunchMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunchMains);
                    console.log('getAllLunchMains() returns: ', lunchMains);
                }
            })
        })
    }
    //get desserts for lunch menu
    getAllLunchDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'dessert', chefSpecial: 'false' }, function (err, lunchDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunchDesserts);
                    console.log('getAllLunchDesserts() returns: ', lunchDesserts);
                }
            })
        })
    }

    //DINNER MENU
    //get chef special starters for dinner menu
    getAllDinnerSpecialStarter() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'true' }, function (err, dinnerSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinnerSpecialStarters);
                    console.log('getAllDinnerSpecialStarter() returns: ', dinnerSpecialStarters);
                }
            })
        })
    }
    //get chef specials mains for dinner menu
    getAllDinnerSpecialMain() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'true' }, function (err, dinnerSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinnerSpecialMains);
                    console.log('getAllDinnerSpecialMain() returns: ', dinnerSpecialMains);
                }
            })
        })
    }
    //get starters for dinner menu
    getAllDinnerStarters() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'false' }, function (err, dinnerStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinnerStarters);
                    console.log('getAllDinnerStarters() returns: ', dinnerStarters);
                }
            })
        })
    }
    //get mains for dinner menu
    getAllDinnerMains() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'false' }, function (err, dinnerMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinnerMains);
                    console.log('getAllDinnerMains() returns: ', dinnerMains);
                }
            })
        })
    }
    //get desserts for dinner menu
    getAllDinnerDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'dessert', chefSpecial: 'false' }, function (err, dinnerDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinnerDesserts);
                    console.log('getAllDinnerDesserts() returns: ', dinnerDesserts);
                }
            })
        })
    }

    //REGIONAL MENU
    //get starters for regional menu
    getAllRegionalStarters() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'starter', chefSpecial: 'false' }, function (err, regionalStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(regionalStarters);
                    console.log('getAllRegionalStarters() returns: ', regionalStarters);
                }
            })
        })
    }
    //get mains for regional menu
    getAllRegionalMains() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'main', chefSpecial: 'false' }, function (err, regionalMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(regionalMains);
                    console.log('getAllRegionalMains() returns: ', regionalMains);
                }
            })
        })
    }
    //get desserts for regional menu
    getAllRegionalDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'dessert', chefSpecial: 'false' }, function (err, regionalDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(regionalDesserts);
                    console.log('getAllRegionalDesserts() returns: ', regionalDesserts);
                }
            })
        })
    }

    /* Functions for Admin interaction */
    addEntry(name, description, ingredients, allergens, price, menu, course, chefSpecial, active) {
        var entry = {
            name: name,
            description: description,
            ingredients: ingredients,
            allergens: allergens,
            price: price,
            menu: menu,
            course: course,
            chefSpecial: chefSpecial,
            active: active
        }
        console.log('entry created', entry);
        this.db.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    updateLunchMenu(name, active) {
        this.db.update({ name: name }, { $set: { active: active } }, function (err, doc) {
            if (err) {
                console.log("error updating lunch menu!", subject);
            }
            else {
                console.log("Lunch menu updated!", doc);
            }
        })
    }
    updateDinnerMenu(name, active) {
        this.db.update({ name: name, active: active }, { $set: { active: active } }, {}, function (err, doc) {
            if (err) {
                console.log("error updating dinner menu!", subject);
            }
            else {
                console.log("Dinner menu updated!", doc);
            }
        })
    }
    updateRegionalMenu(name, active) {
        this.db.update({ name: name }, { $set: { active: active } }, function (err, doc) {
            if (err) {
                console.log("error updating regional menu!", subject);
            }
            else {
                console.log("Regional menu updated!", doc);
            }
        })
    }
}
module.exports = Menus;