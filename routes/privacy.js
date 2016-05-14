var express = require('express');
var router = express.Router();

/* GET privacy page. */
router.get('/', function(req, res, next) {
  res.render('privacy');
});

/* GET terms and conditions page. */
router.get('/terms', function(req, res, next) {
  res.render('termsConditions');
});

module.exports = router;
