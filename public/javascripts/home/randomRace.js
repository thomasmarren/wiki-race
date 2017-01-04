newRandomRace()

function newRandomRace(){
  fetch("http://localhost:3000/home/randomRace")
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    var start = res.data[0].start.split('_').join(' ')
    var finish = res.data[0].finish.split('_').join(' ')
    document.getElementById('random-start').innerHTML = start
    document.getElementById('random-finish').innerHTML = finish
  })
}
