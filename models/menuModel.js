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

    //LUNCH MENU
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
/*
getActiveLunchSpecialStarter() {
        try {
            const specStarter = this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'true', active: 'true' });
            return specStarter;
        }
        catch (error) {
            console.error("Error displaying lunch chef special starter:", error);
        }
    }
     getActiveLunchSpecialMain() {
        try {
            const specMain = this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'true', active: 'true' });
            return specMain;
        }
        catch (error) {
            console.error("Error displaying lunch chef special main:", error);
        }
    }
     getActiveLunchStarters() {
        try {
            console.log("path tracer 2");
            const starters = this.db.find({ menu: 'lunch', course: 'starter', chefSpecial: 'false', active: 'true' });
            console.log(starters);
            return starters;
        }
        catch (error) {
            console.error("Error displaying lunch starters:", error);
        }
    }
     getActiveLunchMains() {
        try {
            const mains = this.db.find({ menu: 'lunch', course: 'main', chefSpecial: 'false', active: 'true' });
            return mains;
        }
        catch (error) {
            console.error("Error displaying lunch mains:", error);
        }
    }
     getActiveLunchDesserts() {
        try {
            const desserts = this.db.find({ menu: 'dinner', course: 'dessert', chefSpecial: 'false', active: 'true' });
            return desserts;
        }
        catch (error) {
            console.error("Error displaying lunch desserts:", error);
        }
    }

     getActiveDinnerSpecialStarter() {
        try {
            const specStarter = this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'true', active: 'true' });
            return specStarter;
        }
        catch (error) {
            console.error("Error displaying dinner chef special starter:", error);
        }
    }
     getActiveDinnerSpecialMain() {
        try {
            const specMain = this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'true', active: 'true' });
            return specMain;
        }
        catch (error) {
            console.error("Error displaying dinner chef special main:", error);
        }
    }
     getActiveDinnerStarters() {
        try {
            const starters = this.db.find({ menu: 'dinner', course: 'starter', chefSpecial: 'false', active: 'true' });
            return starters;
        }
        catch (error) {
            console.error("Error displaying dinner starters:", error);
        }
    }
     getActiveDinnerMains() {
        try {
            const mains = this.db.find({ menu: 'dinner', course: 'main', chefSpecial: 'false', active: 'true' });
            return mains;
        }
        catch (error) {
            console.error("Error displaying dinner mains:", error);
        }
    }
     getActiveDinnerDesserts() {
        try {
            const desserts = this.db.find({ menu: 'dinner', course: 'dessert', chefSpecial: 'false', active: 'true' });
            return desserts;
        }
        catch (error) {
            console.error("Error displaying dinner desserts:", error);
        }
    }

     getActiveRegionalStarters() {
        try {
            const starters = this.db.find({ menu: 'regional', course: 'starter', chefSpecial: 'false', active: 'true' });
            return starters;
        }
        catch (error) {
            console.error("Error displaying regional starters:", error);
        }
    }
     getActiveRegionalMains() {
        try {
            const mains = this.db.find({ menu: 'regional', course: 'main', chefSpecial: 'false', active: 'true' });
            return mains;
        }
        catch (error) {
            console.error("Error displaying regional mains:", error);
        }
    }
     getActiveRegionalDesserts() {
        try {
            const desserts = this.db.find({ menu: 'regional', course: 'dessert', chefSpecial: 'false', active: 'true' });
            return desserts;
        }
        catch (error) {
            console.error("Error displaying regional desserts:", error);
        }
    }

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