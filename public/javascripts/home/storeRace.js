function storeRace(){
  event.preventDefault()
  var start = event.currentTarget.childNodes[3].value
  var finish = event.currentTarget.childNodes[7].value
  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
}
