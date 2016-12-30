require('dotenv').config();
var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {content: 'hello world'})
})

router.get('/article/:topic', function(req, res, next) {

  var topic = req.params.topic

  var options = {
    url: `https://mercury.postlight.com/parser?url=https://en.wikipedia.org/wiki/${topic}`,
    headers: {
      'x-api-key': process.env.MERCURY_API_KEY
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var article = JSON.parse(body);
      res.json(article);
    }
  }

  request(options, callback);

});

router.get('/article', function(req, res, next) {

  // var options = {
  //   url: 'https://mercury.postlight.com/parser?url=https://en.wikipedia.org/wiki/Ficus_rubiginosa',
  //   headers: {
  //     'x-api-key': process.env.MERCURY_API_KEY
  //   }
  // };
  //
  // function callback(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var article = JSON.parse(body);
  //     res.json(article);
  //   }
  // }
  //
  // request(options, callback);

  res.json({title: 'Title', content: "<p>Content</p>"})

});

router.get('/races', db.getAllRaces)

router.post('/completeRace', db.createRace)

module.exports = router;
