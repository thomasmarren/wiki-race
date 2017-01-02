document.getElementById('from-to').innerHTML = "Racing from " + raceState.startDisplay + " to " + raceState.finishDisplay

var topic = raceState.start

fetch(`http://localhost:3000/race/article/${topic}`)
.then( res => {
  return res.json()
}).then( res => {
  var content = res.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
  var newLink = document.createElement('li')
  newLink.innerHTML = res.title
  document.getElementById('links-hit').appendChild(newLink)
  document.getElementById('article-title').innerHTML = res.title
  document.getElementById('article').innerHTML = content
})
