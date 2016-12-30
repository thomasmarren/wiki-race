// CREATE TABLE races (
//   ID SERIAL PRIMARY KEY,
//   player TEXT,
//   start TEXT,
//   finish TEXT,
//   clicks INT,
//   speed INT
// );

function completeRace(){

  fetch("http://localhost:3000/completeRace",
  {
    method: "POST",
    body: JSON.stringify({
      player: "Tom",
      start: "amityville",
      finish: "philadelphia",
      clicks: 20,
      speed: 30000
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    debugger
    console.log(res)
  })

}
