function storeNewRace(){
  event.preventDefault()
  var start = document.getElementById('user-start').value
  var finish = document.getElementById('user-finish').value

  // fetch("http://localhost:3000/race/createContest",
  fetch("https://wiki-race.herokuapp.com/race/createContest",
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
