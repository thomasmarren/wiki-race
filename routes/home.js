require('dotenv').config();
var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home')
})

router.get('/races', db.getAllRaces)

router.get('/randomRace', db.getRandomRace)

module.exports = router;
