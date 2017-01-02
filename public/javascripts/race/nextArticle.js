function nextArticle(){

  raceState.clicks += 1

  // var link = event.currentTarget.dataset.id
  var link = 'Payphone'

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
      var newLink = response.title
      raceState.linksHit.push(newLink)
      var content = response.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
      var newLinkEl = document.createElement('li')
      newLinkEl.innerHTML = newLink
      document.getElementById('links-hit').appendChild(newLinkEl)
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

  saveRace()
  renderRaceResults()

  function saveRace(){

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
  }

  function renderRaceResults(){

    document.getElementById('race').classList += 'hidden'
    document.getElementById('race-results').classList -= 'hidden'

    document.getElementById('from-to-results').innerHTML = "Your results for " + raceState.start + " to " + raceState.finish

    document.getElementById('links-hit-results').innerHTML = '<ul>'
    raceState.linksHit.forEach( link => {
      document.getElementById('links-hit-results').innerHTML += `<li>${link}</li>`
    })
    document.getElementById('links-hit-results').innerHTML += '</ul>'

    document.getElementById('clicks-results').innerHTML = `<p>${raceState.clicks} links clicked</p>`
    document.getElementById('speed-results').innerHTML = `<p>${displaySpeed(raceState.startTime)}</p>`
  }

  function calculateSpeed(startTime){
    return Date.parse(new Date()) - Date.parse(startTime);
  }

  function displaySpeed(startTime){
    var speed = calculateSpeed(startTime)
    var mins = Math.floor( (speed/1000/60) % 60 );
    var secs = Math.floor( (speed/1000) % 60 );
    return mins + ' mins ' + secs + ' secs'
  }

}
// CONTENT FIXES
  // Remove tables
