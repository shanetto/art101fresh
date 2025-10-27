let hour = 12;
//make variables to reference the html stuff
var clock = document.querySelector("#clock");
var phase = document.querySelector("#sky");
var nextHourButton = document.querySelector("#nextHour");
//this is for incrementing the clock and setting AM/PM
function updateClock() {

  let period;
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  let displayHour = hour % 12;

  if (displayHour === 0) {
    displayHour = 12;
  }
  clock.textContent = displayHour + " " + period;
}
function updatePhase() {
  let backgroundImage;

  if (hour >= 6 && hour < 12) {
    backgroundImage = "url('sun2.jpg')";
  } else if (hour >= 12 && hour < 18) {
    backgroundImage = "url('sun1.jpg')";
  } else if (hour >= 18 && hour < 24) {
    backgroundImage = "url('sun3.jpg')";
  } else {
    backgroundImage = "url('moon.jpg')";
  }
  phase.style.backgroundImage = backgroundImage;
}
nextHourButton.onclick = function() {
  hour = (hour + 1) % 24;
  updateClock();
  updatePhase();
};

updateClock();
updatePhase();
