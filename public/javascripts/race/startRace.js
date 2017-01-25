document.getElementById('from-to').innerHTML = "Racing from " + raceState.startDisplay + " to " + raceState.finishDisplay
document.getElementById('article-title').innerHTML = "<p>Loading Article...</p>"
document.getElementById('article').innerHTML = ""

var topic = raceState.start

fetch(`http://localhost:3000/race/article/${topic}`)
.then( res => {
  return res.json()
}).then( res => {
  var newLink = res.title
  raceState.linksHit.push(newLink)
  var content = res.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
  var newLinkEl = document.createElement('li')
  newLinkEl.innerHTML = newLink
  document.getElementById('num-links-hit').innerHTML = raceState.linksHit.length
  document.getElementById('links-hit').appendChild(newLinkEl)
  document.getElementById('article-title').innerHTML = res.title
  document.getElementById('article').innerHTML = content
})
