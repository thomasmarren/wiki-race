var raceState = {
  player: sessionStorage.getItem('wiki-race-player'),
  start: JSON.parse(sessionStorage.getItem('wiki-race-race')).start,
  finish: JSON.parse(sessionStorage.getItem('wiki-race-race')).finish,
  clicks: 0,
  startTime: new Date(),
  finishRace: ""
}
