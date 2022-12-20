const express = require('express');
const path = require('path');
const { homePage, aboutPage, contactPage, skillPage, workPage } = require('../controllers/pageController');
// router initializations

const router = express.Router();


//All routes 

router.get('/', homePage);


router.get('/about', aboutPage);

router.get('/contact', contactPage);

router.get('/skills', skillPage);

router.get('/work', workPage);






// export module


module.exports = router;