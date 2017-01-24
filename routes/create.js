require('dotenv').config();
var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../queries');

router.get('/', function(req, res, next) {
  res.render('create')
})

router.post('/searchStart', function(req, res, next){

  var options = {
    url: `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${req.body.start}`
  }

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var article = JSON.parse(body)
      res.json(article)
    }
  }

  request(options, callback)

})

router.post('/searchFinish', function(req, res, next){

  var options = {
    url: `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${req.body.finish}`
  }

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var article = JSON.parse(body)
      res.json(article)
    }
  }

  request(options, callback)

})

router.post('/createContest', db.createContest)

module.exports = router;
