function storeRandomRace(){
  event.preventDefault()
  var start = document.getElementById('random-start').innerHTML.split(' ').join('_')
  var finish = document.getElementById('random-finish').innerHTML.split(' ').join('_')
  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
  window.location.href = '/race'
}

function storeRecentRace(row){
  var start = document.getElementsByClassName(row)[0].id
  var finish = document.getElementsByClassName(row)[1].id
  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
  window.location.href = '/race'
}
