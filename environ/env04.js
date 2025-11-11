let hour = 12;
let colorInterval;
let currentPalette = [];
let currentColorIndex = 0;


const $clock = $("#clock");
const $phase = $("#sky");
const $nextHourButton = $("#nextHour");
const $body = $("body");


const colorPalettes = {
  sunrise: ['#FFB6C1', '#FFA07A', '#FF6347', '#FF4500', '#FF8C00'],
  noon: ['#FFD700', '#FFEC8B', '#FFFACD', '#FFFF00', '#F0E68C'],
  sunset: ['#FF6347', '#FF4500', '#8B0000', '#B22222', '#DC143C'],
  night: ['#191970', '#000080', '#4169E1', '#1E90FF', '#87CEEB']
};


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
  $clock.text(displayHour + " " + period);
}

function updatePhase() {
  let backgroundImage;

  if (hour >= 6 && hour < 12) {
    backgroundImage = "url('sun2.jpg')";
    currentPalette = colorPalettes.sunrise;
  } else if (hour >= 12 && hour < 18) {
    backgroundImage = "url('sun1.jpg')";
    currentPalette = colorPalettes.noon;
  } else if (hour >= 18 && hour < 24) {
    backgroundImage = "url('sun3.jpg')";
    currentPalette = colorPalettes.sunset;
  } else {
    backgroundImage = "url('moon.jpg')";
    currentPalette = colorPalettes.night;
  }
  $phase.css('background-image', backgroundImage);
}


function cycleColors() {
  currentColorIndex = (currentColorIndex + 1) % currentPalette.length;
  $body.css('background-color', currentPalette[currentColorIndex]);
}


$phase.hover(

  function() {
    if (colorInterval) clearInterval(colorInterval);
    colorInterval = setInterval(cycleColors, 800);
  },

  function() {
    if (colorInterval) {
      clearInterval(colorInterval);
      colorInterval = null;
    }

  }
);


$nextHourButton.on('click', function() {
  hour = (hour + 1) % 24;
  updateClock();
  updatePhase();
});


updateClock();
updatePhase();