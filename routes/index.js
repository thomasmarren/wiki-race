require('dotenv').config();
var express = require('express');
var path = require('path')
var router = express.Router();
var request = require('request');
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
})

module.exports = router;
