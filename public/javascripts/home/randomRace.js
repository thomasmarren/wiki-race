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

function storeRandomRace(){
  event.preventDefault()
  var start = document.getElementById('random-start').innerHTML.split(' ').join('_')
  var finish = document.getElementById('random-finish').innerHTML.split(' ').join('_')
  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
  window.location.href = '/race'
}
