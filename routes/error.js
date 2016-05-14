var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('error', { err: 'error page displayed here' });
});

module.exports = router;
