newRandomRace()

function newRandomRace(){
  fetch("http://localhost:3000/home/randomRace")
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    document.getElementById('random-start').innerHTML = res.data[0].start
    document.getElementById('random-finish').innerHTML = res.data[0].finish
  })
}

function storeRandomRace(){
  event.preventDefault()
  var start = document.getElementById('random-start').innerHTML
  var finish = document.getElementById('random-finish').innerHTML
  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
  window.location.href = '/race'
}
