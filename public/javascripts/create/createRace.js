function searchStart(){
  event.preventDefault()
  var start = document.getElementById('input-start').value

  fetch("http://localhost:3000/create/searchStart",
  {
    method: "POST",
    body: JSON.stringify({
      start: start
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then( res => {
    return res.json()
  })
  .then( data => {
    if(data.query.searchinfo.suggestion === undefined){
      let searchResult = data.query.search[0].title
      document.getElementById("search-start").innerHTML = `${searchResult}`
      document.getElementById("start-form").style.display = "none"
      document.getElementById("finish-form").style.display = "block"
    } else {
      let searchResult = data.query.searchinfo.suggestion
      document.getElementById("start-suggestion-div").style.display = "block"
      document.getElementById("start-suggestion").innerHTML = `Did you mean ${searchResult}?`
      document.getElementById("start-suggestion").setAttribute('data-id', searchResult)
      document.getElementById("start-suggestion").onclick = function(){window.open(`https://www.wikipedia.org/wiki/${searchResult}`, 'newwindow', 'width=800, height=450'); return false;}
    }
  })
}

function searchFinish(){

  event.preventDefault()
  var finish = document.getElementById('input-finish').value

  fetch("http://localhost:3000/create/searchFinish",
  {
    method: "POST",
    body: JSON.stringify({
      finish: finish
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then( res => {
    return res.json()
  })
  .then( data => {
    if(data.query.searchinfo.suggestion === undefined){
      let searchResult = data.query.search[0].title
      document.getElementById("search-finish").innerHTML = `${searchResult}`
      document.getElementById("create-race").style.display = "block"
    } else {
      let searchResult = data.query.searchinfo.suggestion
      document.getElementById("finish-suggestion-div").style.display = "block"
      document.getElementById("finish-suggestion").innerHTML = `Did you mean ${searchResult}?`
      document.getElementById("finish-suggestion").setAttribute('data-id', searchResult)
      document.getElementById("finish-suggestion").onclick = function(){window.open(`https://www.wikipedia.org/wiki/${searchResult}`, 'newwindow', 'width=800, height=450'); return false;}
    }
  })
}

function handleInput(input,id){
  var sug = document.getElementById(`${id}-suggestion`).dataset.id
  if(input === "yes"){
    document.getElementById(`search-${id}`).innerHTML = sug
    if(id === "start"){
      document.getElementById("start-form").style.display = "none"
      document.getElementById("finish-form").style.display = "block"
    } else {
      document.getElementById("create-race").style.display = "block"
    }
  }
  document.getElementById(`${id}-suggestion-div`).style.display = "none"
}

function createContest(){
  var start = document.getElementById(`search-start`).innerHTML
  var finish = document.getElementById(`search-finish`).innerHTML

  fetch("http://localhost:3000/create/createContest",
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
  .then( res => {
    return res.json()
  })
  .then( () => {
    sessionStorage.setItem('wiki-race-race', JSON.stringify({start: start, finish: finish}))
    window.location.href = '/race'
  })

}
