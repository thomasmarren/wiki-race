fetch('http://localhost:3000/article')
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
