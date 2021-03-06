var startTime = raceState.startTime;

function timeRemaining(startTime){
  var time = Date.parse(new Date()) - Date.parse(startTime)
  var seconds = Math.floor( (time/1000) % 60 )
  var minutes = Math.floor( (time/1000/60) % 60 )
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  return {
    'minutes': minutes,
    'seconds': seconds
  };
}

function buildTimer(id, startTime){
  var clock = document.getElementById(id)
  var timeInterval = setInterval(function(){
    var time = timeRemaining(startTime)
    clock.innerHTML = time.minutes + ":"  + time.seconds;
  },1000);
}

buildTimer('timer', startTime);
