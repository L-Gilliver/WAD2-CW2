const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurantController.js');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth')

//router.get("/", controller.landing_page);
router.get('/', function(req, res) {
    res.redirect('/about.html');
})
router.get('/lunch-menu', controller.activeLunchMenu);   //show_lunch_menu);
router.get('/dinner-menu', controller.activeDinnerMenu);  //show_dinner_menu);
router.get('/regional-menu', controller.activeRegionalMenu);   //show_regional_menu);
router.get('/admin', controller.show_login_page);
router.post('/admin', login, controller.handle_login);

router.get('/admin-lunch-menu', verify, controller.editLunchMenu);
router.post('/add-to-lunch-menu/:id', verify, controller.AddToLunchMenu);
router.post('/remove-from-lunch-menu/:id', verify, controller.removeFromLunchMenu);

router.get('/admin-dinner-menu', verify, controller.editDinnerMenu);
router.post('/add-to-dinner-menu/:id', verify, controller.AddToDinnerMenu);
router.post('/remove-from-dinner-menu/:id', verify, controller.removeFromDinnerMenu);

router.get('/admin-regional-menu', verify, controller.editRegionalMenu);
router.post('/add-to-regional-menu/:id', verify, controller.AddToRegionalMenu);
router.post('/remove-from-regional-menu/:id', verify, controller.removeFromRegionalMenu);

router.get("/logout", controller.logout);


router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
});
module.exports = router;