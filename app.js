// StopWatch
var minutes = 0;
var seconds = 0;
var milliSec = 0;
console.log(minutes, seconds, milliSec);
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var interval;
var stopBtn = document.getElementById("stopBtn");
var pauseBtn = document.getElementById("pauseBtn");
var lapBtn = document.getElementById("lapBtn");
var stopReset = document.getElementById("stopReset");
var myTable = document.getElementById("my-table");
var lapArr = [];
var laps;
var index = 1;

function stopWatchTimer() {
  milliSec++;
  msec.innerHTML = ` ${milliSec}`;
  if (milliSec >= 100) {
    seconds++;
    sec.innerHTML = ` ${seconds}<small>s</small> :`;
    milliSec = 0;
  } else if (seconds >= 60) {
    minutes++;
    min.innerHTML = `${minutes}<small>m</small> :`;
    seconds = 0;
  }
  // console.log(minutes,seconds ,milliSec);
}

function startStopWatch() {
  interval = setInterval(stopWatchTimer, 10);
  stopReset.disabled = false;
  pauseBtn.disabled = false;
  lapBtn.disabled = false;
  stopBtn.disabled = true;
}
function pauseStopWatch() {
  clearInterval(interval);
  stopReset.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = false;
}
function reset() {
  minutes = 0;
  seconds = 0;
  milliSec = 0;
  min.innerHTML = `${minutes}0: `;
  sec.innerHTML = ` ${seconds}0:`;
  msec.innerHTML = ` ${milliSec}0`;
  clearInterval(interval);
  laps = ` <thead id="tHead">
    <tr>
        <th scope="col">#</th>
        <th scope="col">Minutes</th>
        <th scope="col">Seconds</th>
        <th scope="col">MilliSeconds</th>
    </tr>
</thead>`;
  myTable.innerHTML = laps;
  index = 1;
  stopReset.disabled = true;
  pauseBtn.disabled = true;
  stopBtn.disabled = false;
  lapBtn.disabled = true;
}
function showLap() {
  console.log(minutes, seconds, milliSec);
  laps = `
  <tbody>
    <tr>
    <th scope="row"> ${index++})</th>
      <td>${minutes}m</td>
      <td>${seconds}s</td>
      <td>${milliSec}</td>
    </tr>`;
  myTable.innerHTML += laps;
}

// Timer
var tSpan = document.getElementById("tspan");
var tStart = document.getElementById("tstart");
var tEnd = document.getElementById("tend");
var beep = document.getElementById("beep");
var totalMins = Math.ceil(Math.random()*6);
tSpan.innerHTML = `0${totalMins}<small>m</small> : 00<small>s</small>`;
var time = totalMins * 60;
var timerStatus = false;
var timeInterval  ;

function timer() {
  var timerMinutes = Math.floor(time / 60);
  var timerSeconds = time % 60;
  if (time >= 0) {
    tSpan.innerHTML = `0${timerMinutes}<small>m</small> : ${timerSeconds}<small>s</small>`;
    if (timerSeconds < 10) {
      tSpan.innerHTML = `0${timerMinutes}<small>m</small>: 0${timerSeconds}<small>s</small>`;
    }
  } else {
    time = 0;
    resetTimer();
    tStart.disabled = false;
    tEnd.disabled = true;
    beep.play();
  }
  // console.log(time);
  time--;
}
function startTimer() {
  tEnd.disabled = false;
  if (!timerStatus) {
    tStart.innerHTML = "Pause";
    timerStatus = true;
    timeInterval = setInterval(timer, 1000);
    beep.pause();
  } else {
    console.log("I am  time ELse"+ time);
    tStart.innerHTML = "Start";
    timerStatus = false;
    pauseTimer();
  }
}
function resetTimer() {
  tSpan.innerHTML = `00 : 00`;
  clearInterval(timeInterval);
  tStart.disabled = false;
  tEnd.disabled = true;
  tStart.innerText = "Start";
  timerStatus = false;
  time = totalMins * 60;
}

function pauseTimer() {
  clearInterval(timeInterval);
}
