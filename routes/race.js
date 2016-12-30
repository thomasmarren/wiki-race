require('dotenv').config();
var express = require('express');
var path = require('path')
var router = express.Router();
var request = require('request');
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('race')
})

router.get('/article/:topic', function(req, res, next) {

  // var topic = req.params.topic
  //
  // var options = {
  //   url: `https://mercury.postlight.com/parser?url=https://en.wikipedia.org/wiki/${topic}`,
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

  res.json({title: 'Next Article', content: "<p>More Content</p><a onclick='nextArticle()'>Next article</a>"})

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

  res.json({title: 'Title', content: "<p>Content<a onclick='nextArticle()'>Next article</a></p>"})

});

router.post('/completeRace', db.createRace)

module.exports = router;
