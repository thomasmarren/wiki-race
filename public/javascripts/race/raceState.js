var raceState = {
  player: sessionStorage.getItem('wiki-race-player'),
  start: JSON.parse(sessionStorage.getItem('wiki-race-race')).start,
  startDisplay: JSON.parse(sessionStorage.getItem('wiki-race-race')).start.split('_').join(' '),
  finish: JSON.parse(sessionStorage.getItem('wiki-race-race')).finish,
  finishDisplay: JSON.parse(sessionStorage.getItem('wiki-race-race')).finish.split('_').join(' '),
  linksHit: [],
  clicks: 0,
  startTime: new Date()
}
