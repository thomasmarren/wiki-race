function nextArticle(){

  raceState.clicks += 1

  // var link = event.currentTarget.dataset.id
  var link = 'test'

  if (link === raceState.finish){
    completeRace()
  } else {

    document.getElementById('article-title').innerHTML = "<p>Loading Article...</p>"
    document.getElementById('article').innerHTML = ""

    // var topic = link.split("/").slice(-1)[0]
    var topic = 'test'

    fetch(`http://localhost:3000/race/article/${topic}`)
    .then( response => {
      return response.json()
    }).then( response => {
      var content = response.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
      var newLink = document.createElement('li')
      newLink.innerHTML = response.title
      document.getElementById('links-hit').appendChild(newLink)
      document.getElementById('article-title').innerHTML = response.title
      document.getElementById('article').innerHTML = content
    })
  }
}

// CREATE TABLE races (
//   ID SERIAL PRIMARY KEY,
//   player TEXT,
//   start TEXT,
//   finish TEXT,
//   clicks INT,
//   speed INT
// );

function completeRace(){

  var player = raceState.player
  var start = raceState.start
  var finish = raceState.finish
  var clicks = raceState.clicks
  var speed = calculateSpeed(raceState.startTime)

  fetch("http://localhost:3000/race/completeRace",
  {
    method: "POST",
    body: JSON.stringify({
      player: player,
      start: start,
      finish: finish,
      clicks: clicks,
      speed: speed
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  window.location.href = '/home'

  function calculateSpeed(startTime){
    return Date.parse(new Date()) - Date.parse(startTime);
  }

}
// CONTENT FIXES
  // Remove tables
