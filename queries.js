var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/wiki_race';
var db = pgp(connectionString);

function getAllRaces(req, res, next) {
  db.any('select * from races')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL races'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createRace(req, res, next) {
  console.log(req.body)
  req.body.clicks = parseInt(req.body.clicks);
  req.body.speed = parseInt(req.body.speed);
  db.none('insert into races(player, start, finish, clicks, speed)' +
      'values(${player}, ${start}, ${finish}, ${clicks}, ${speed})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Created race'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllRaces: getAllRaces,
  createRace: createRace
};
