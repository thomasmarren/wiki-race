// fetch("http://localhost:3000/home/races")
fetch("https://wiki-race.herokuapp.com/home/races")
.then(function(res){
  return res.json()
})
.then(function(res){
  var table = document.getElementById('results-table-content')
  table.innerHTML = ""

  var counter = 0

  res.data.forEach( race => {

      var row = table.insertRow()

      var player = row.insertCell()
      player.innerHTML = `<p>${race.player}</p>`

      var start = row.insertCell()
      start.innerHTML = `<a id='${race.start}' class='${counter}' href='javascript:none' onclick="window.open('https://www.wikipedia.org/wiki/${race.start}', 'newwindow', 'width=800, height=450'); return false;">${displayLink(race.start)}</a>`

      var finish = row.insertCell()
      finish.innerHTML = `<a id='${race.finish}' class='${counter}' href='javascript:none' onclick="window.open('https://www.wikipedia.org/wiki/${race.finish}', 'newwindow', 'width=800, height=450'); return false;">${displayLink(race.finish)}</a>`

      var clicks = row.insertCell()
      clicks.innerHTML = `<p>${race.clicks}</p>`

      var speed = row.insertCell()
      speed.innerHTML = `<p>${displaySpeed(race.speed)}</p>`

      var button = row.insertCell()
      button.innerHTML = `<button class="table-race-buttons" onclick='storeRecentRace(${counter})'>Race!</button>`

      counter += 1

  })

  function displayLink(link){
    return link.split('_').join(' ')
  }

  function displaySpeed(speed){
    var mins = Math.floor( (speed/1000/60) % 60 );
    var secs = Math.floor( (speed/1000) % 60 );
    return mins + ' mins ' + secs + ' secs'
  }

})
