document.getElementById('from-to').innerHTML = "Racing from " + raceState.start + " to " + raceState.finish

var topic = raceState.start

fetch(`http://localhost:3000/race/article/${topic}`)
.then( response => {
  return response.json()
}).then( response => {
  var content = response.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
  var newLink = document.createElement('li')
  newLink.innerHTML = response.title
  document.getElementById('links-hit').appendChild(newLink)
  document.getElementById('article-title').innerHTML = response.title
  document.getElementById('article').innerHTML = content
})
