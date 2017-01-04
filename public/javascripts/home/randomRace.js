newRandomRace()

function newRandomRace(){
  // fetch("http://localhost:3000/home/randomRace")
  fetch("https://wiki-race.herokuapp.com/home/randomRace")
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    var start = res.data[0].start.split('_').join(' ')
    var finish = res.data[0].finish.split('_').join(' ')

    document.getElementById('random-start').innerHTML = start
    document.getElementById('random-start').onclick = function(){window.open(`https://www.wikipedia.org/wiki/${res.data[0].start}`, 'newwindow', 'width=800, height=450'); return false;}

    document.getElementById('to').innerHTML = 'to'

    document.getElementById('random-finish').innerHTML = finish
    document.getElementById('random-finish').onclick = function(){window.open(`https://www.wikipedia.org/wiki/${res.data[0].finish}`, 'newwindow', 'width=800, height=450'); return false;}
  })
}
