function getAllRaces(){
  event.preventDefault()

  fetch("http://localhost:3000/races")
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    console.log(res.data)
  })

}

function goToAbout(){
  fetch("http://localhost:3000/about")
}
