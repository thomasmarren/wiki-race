fetch("http://localhost:3000/home/races")
.then(function(res){
  return res.json()
})
.then(function(res){
  var table = document.getElementById('races-table-content')
  table.innerHTML = ""

  res.data.forEach( race => {

      var row = table.insertRow()

      var player = row.insertCell()
      player.innerHTML = `<p>${race.player}</p>`

      var start = row.insertCell()
      start.innerHTML = `<p>${race.start}</p>`

      var finish = row.insertCell()
      finish.innerHTML = `<p>${race.finish}</p>`

      var clicks = row.insertCell()
      clicks.innerHTML = `<p>${race.clicks}</p>`

      var speed = row.insertCell()
      speed.innerHTML = `<p>${race.speed}</p>`

  })

})
