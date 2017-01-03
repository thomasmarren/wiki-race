function storeNewRace(){
  event.preventDefault()
  var start = document.getElementById('user-start').value
  var finish = document.getElementById('user-finish').value

  fetch("http://localhost:3000/race/createContest",
  {
    method: "POST",
    body: JSON.stringify({
      start: start,
      finish: finish
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
  window.location.href = '/race'
}
