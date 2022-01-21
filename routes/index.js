const express = require('express');
const router = express.Router();
const controller = require('../controller/con-index');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Assignment' });
});


router.get('/customer', function (req, res) {

})

router.get('/purchase-order', function (req, res) {

})

router.get('/shipping-details', function (req, res) {

})






module.exports = router;
