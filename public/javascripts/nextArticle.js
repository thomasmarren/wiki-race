function nextArticle(){

  document.getElementById('article-title').innerHTML = "<p>Loading Article...</p>"
  document.getElementById('article').innerHTML = ""

  var link = event.currentTarget.dataset.id

  var topic = link.split("/").slice(-1)[0]

  fetch(`http://localhost:3000/article/${topic}`)
  .then( response => {
    return response.json()
  }).then( response => {
    debugger
    var content = response.content.replace(/href/g, "onclick='nextArticle()' href='#' data-id")
    var newLink = document.createElement('li')
    newLink.innerHTML = response.title
    document.getElementById('links-hit').appendChild(newLink)
    document.getElementById('article-title').innerHTML = response.title
    document.getElementById('article').innerHTML = content
  })
}


// CONTENT FIXES
  // Remove tables
