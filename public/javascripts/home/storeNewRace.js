function storeNewRace(){
  event.preventDefault()
  var start = document.getElementById('user-start').value
  var finish = document.getElementById('user-finish').value
  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
  window.location.href = '/race'
}
