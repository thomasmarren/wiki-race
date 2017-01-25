function nextArticle(){

  raceState.clicks += 1

  var link = event.currentTarget.dataset.id.split("/").slice(-1)[0]
  // var link = 'Payphone'

  if (link === raceState.finish){
    completeRace()
  } else {

    document.getElementById('article-title').innerHTML = "<p>Loading Article...</p>"
    document.getElementById('article').innerHTML = ""

    var topic = link.split("/").slice(-1)[0]

    fetch(`http://localhost:3000/race/article/${topic}`)
    .then( res => {
      return res.json()
    }).then( res => {
      var newLink = res.title
      raceState.linksHit.push(newLink)
      var content = res.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
      var newLinkEl = document.createElement('li')
      newLinkEl.innerHTML = newLink
      document.getElementById('num-links-hit').innerHTML = raceState.linksHit.length
      document.getElementById('links-hit').appendChild(newLinkEl)
      document.getElementById('article-title').innerHTML = res.title
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
    document.getElementById('race-results-container').classList -= 'hidden'

    document.getElementById('from-to-results').innerHTML = raceState.startDisplay + " to " + raceState.finishDisplay

    document.getElementById('links-hit-results').innerHTML = '<ul>'
    raceState.linksHit.forEach( link => {
      document.getElementById('links-hit-results').innerHTML += `<li>${link}</li>`
    })
    document.getElementById('links-hit-results').innerHTML += `<li>${raceState.finishDisplay}</li>`
    document.getElementById('links-hit-results').innerHTML += '</ul>'

    document.getElementById('clicks-results').innerHTML = `${raceState.clicks}`
    document.getElementById('speed-results').innerHTML = `${displaySpeed(raceState.startTime)}`
  }

  function calculateSpeed(startTime){
    return Date.parse(new Date()) - Date.parse(startTime);
  }

  function displaySpeed(startTime){
    var speed = calculateSpeed(startTime)
    var mins = Math.floor( (speed/1000/60) % 60 )
    var secs = Math.floor( (speed/1000) % 60 )
    if (secs < 10) {
      secs = "0" + secs
    }
    return mins + ' : ' + secs
  }

}
// CONTENT FIXES
  // Remove tables
