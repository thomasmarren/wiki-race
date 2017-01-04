var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/wiki_race';
var db = pgp(connectionString);

function getAllRaces(req, res, next) {
  db.any('SELECT * FROM races JOIN contests ON races.contest_id = contests.id ORDER BY racedate DESC LIMIT 10')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all races'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getRandomRace(req, res, next){
  db.any('SELECT * FROM contests ORDER BY random() LIMIT 1')
  .then(function(data){
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved random race'
      })
  })
  .catch(function (err) {
    return next(err);
  });
}

function getSpecificRace(req, res, next){
  
  var start = req.params.start
  var finish = req.params.finish

  db.any(
    `SELECT * FROM contests
    WHERE start = '${start}' AND finish = '${finish}'`
  ).then( data => {
    console.log(data)
    db.any(
      `SELECT * FROM races WHERE race.contest_id = ${data[0].id}`
    ).then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Found race'
          });
      })
      .catch(function (err) {
        return next(err);
      });

      })
}

// function createContest(req, res, next){
//
//   db.any(
//     `SELECT * FROM contests
//     WHERE start = '${req.body.start}' AND finish = '${req.body.finish}'`
//   ).then( data => {
//     console.log(data)
//   })
//
//   db.none(
//     'insert into contests (start, finish)' +
//     'values(${start}, ${finish})',
//     req.body
//   ).then(function () {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: 'Created contest'
//         });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
//
// }

function createRace(req, res, next) {
  req.body.clicks = parseInt(req.body.clicks);
  req.body.speed = parseInt(req.body.speed);

  db.any(
    `SELECT * FROM contests
    WHERE start = '${req.body.start}' AND finish = '${req.body.finish}'`
  ).then( data => {
    db.none(
      `insert into races (player, contest_id, clicks, speed)
      values('${req.body.player}', '${data[0].id}', '${req.body.clicks}', '${req.body.speed}')`
    ).then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Created race'
          });
      })
      .catch(function (err) {
        return next(err);
      });

      })
}

module.exports = {
  getAllRaces: getAllRaces,
  getRandomRace: getRandomRace,
  getSpecificRace: getSpecificRace,
  // createContest: createContest,
  createRace: createRace
};
