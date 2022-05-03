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
            ingredients: '[Cod, Potato, Eggs, Garlic, Lemon, Parsley]',
            allergens: 'Gluten',
            price: '7.00',
            menu: 'lunch',
            course: 'starter',
            chefSpecial: 'false',
            active: 'true'
        });
        console.log('db entry dish added to menu');

        this.db.insert({
            name: "Venison & Fries",
            description: 'Scottish Venison steak served with homemade fries and stroganoff sauce.',
            ingredients: '[Venison, Potato, Onion, Garlic, Mushroom, Beef stock]',
            allergens: '[Gluten, Dairy]',
            price: '17.00',
            menu: 'dinner',
            course: 'main',
            chefSpecial: 'true',
            active: 'false'
        });
        console.log('db entry dish added to menu');
    }


    getActiveLunchItems() {
        const specStart = new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'true', active: 'true' }, function (err, activeLunchSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchSpecialStarters);
                    console.log('getActiveLunchItems() returns: ', activeLunchSpecialStarters);
                }
            })
        })
        const specMain = new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'true', active: 'true' }, function (err, activeLunchSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchSpecialMains);
                    console.log('getActiveLunchItems() returns: ', activeLunchSpecialMains);
                }
            })
        })
        const starter = new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeLunchStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchStarters);
                    console.log('getActiveLunchItems() returns: ', activeLunchStarters);
                }
            })
        })
        const main = new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeLunchMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchMains);
                    console.log('getActiveLunchItems() returns: ', activeLunchMains);
                }
            })
        })
        const dessert = new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeLunchDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchDesserts);
                    console.log('getActiveLunchItems() returns: ', activeLunchDesserts);
                }
            })
        })

        return Promise.all([
            specStart,
            specMain,
            starter,
            main,
            dessert
        ]).then((dishes) => {
            console.log('getActiveLunchItems() returns: ', dishes);
        })
        .catch((err) => console.log(err));
    }
    getActiveDinnerItems() {
        const specStart = new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'true', active: 'true' }, function (err, activeDinnerSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerSpecialStarters);
                    console.log('getActiveDinnerSpecialStarters() returns: ', activeDinnerSpecialStarters);
                }
            })
        })
        const specMain = new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'true', active: 'true' }, function (err, activeDinnerSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerSpecialMains);
                    console.log('getActiveDinnerSpecialMains() returns: ', activeDinnerSpecialMains);
                }
            })
        })
        const starter = new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeDinnerStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerStarters);
                    console.log('getActiveDinnerStarters() returns: ', activeDinnerStarters);
                }
            })
        })
        const main = new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeDinnerMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerMains);
                    console.log('getActiveDinnerMains() returns: ', activeDinnerMains);
                }
            })
        })
        const dessert = new Promise((resolve, reject) => {
            this.db.find({ menu: 'dinner', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeDinnerDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeDinnerDesserts);
                    console.log('getActiveDinnerDesserts() returns: ', activeDinnerDesserts);
                }
            })
        })

        return Promise.all([
            specStart,
            specMain,
            starter,
            main,
            dessert
        ]).then((dishes) => {
            console.log('getActiveDinnerItems() returns: ', dishes);
        })
        .catch((err) => console.log(err));
    }
    getActiveRegionalItems() {
        const starter = new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeRegionalStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeRegionalStarters);
                    console.log('getActiveRegionalStarters() returns: ', activeRegionalStarters);
                }
            })
        })
        const main = new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeRegionalMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeRegionalMains);
                    console.log('getActiveRegionalMains() returns: ', activeRegionalMains);
                }
            })
        })
        const dessert = new Promise((resolve, reject) => {
            this.db.find({ menu: 'regional', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeRegionalDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeRegionalDesserts);
                    console.log('getActiveRegionalDesserts() returns: ', activeRegionalDesserts);
                }
            })
        })

        return Promise.all([
            starter,
            main,
            dessert
        ]).then((dishes) => {
            console.log('getActiveRegionalItems() returns: ', dishes);
        })
        .catch((err) => console.log(err));
    }

    //LUNCH MENU
    /*
    getActiveLunchItems() {
        return new Promise((resolve, reject) => {
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'true', active: 'true' }, function (err, activeLunchSpecialStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchSpecialStarters);
                    console.log('getActiveLunchSpecialStarters() returns: ', activeLunchSpecialStarters);
                }
            })
            this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'true', active: 'true' }, function (err, activeLunchSpecialMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchSpecialMains);
                    console.log('getActiveLunchSpecialMains() returns: ', activeLunchSpecialMains);
                }
            })
            this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'false', active: 'true' }, function (err, activeLunchStarters) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchStarters);
                    console.log('getActiveLunchStarters() returns: ', activeLunchStarters);
                }
            })
            this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'false', active: 'true' }, function (err, activeLunchMains) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchMains);
                    console.log('getActiveLunchMains() returns: ', activeLunchMains);
                }
            })
            this.db.find({ menu: 'lunch', course: 'dessert', chefSpecial: 'false', active: 'true' }, function (err, activeLunchDesserts) {
                if (err) {
                    reject(err);
                } else {
                    resolve(activeLunchDesserts);
                    console.log('getActiveLunchDesserts() returns: ', activeLunchDesserts);
                }
            })
        })
    }*/

    
/*



    //ADMIN INTERACTIONS
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
    }*/
}
module.exports = Menus;