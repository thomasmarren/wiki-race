function getSpecificRace(){
  event.preventDefault()

  var start = document.getElementById('specific-start').value
  var finish = document.getElementById('specific-finish').value

  // fetch(`http://localhost:3000/race/getSpecificRace/${start}/${finish}`)
  fetch(`https://wiki-race.herokuapp.com/race/getSpecificRace/${start}/${finish}`)
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    debugger
  })
}
