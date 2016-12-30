function storePlayer(){
  event.preventDefault()
  var player = event.currentTarget.childNodes[1].value
  sessionStorage.setItem('wiki-race-player', player)
  window.location.href = '/home'
}
