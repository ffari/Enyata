var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/incident', function(req, res, next){
  var q = req.body.city;
  var appid = req.body.appid;

  user.postIncident(appid, q);
  res.send("I'm here");
});

module.exports = router;
