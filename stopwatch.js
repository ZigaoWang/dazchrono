// Stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;

// Stopwatch elements
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

// Stopwatch control buttons
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

// Event listeners for control buttons
startStopButton.addEventListener("click", toggleStopwatch);
resetButton.addEventListener("click", resetStopwatch);

// Start or stop the stopwatch based on its current state
function toggleStopwatch() {
  if (timer) {
    stopStopwatch();
  } else {
    startStopwatch();
  }
}

// Start the stopwatch
function startStopwatch() {
  timer = setInterval(incrementStopwatch, 10);
  startStopButton.textContent = "Stop";
}

// Stop the stopwatch
function stopStopwatch() {
  clearInterval(timer);
  timer = null;
  startStopButton.textContent = "Start";
}

// Reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateStopwatchDisplay();
  timer = null;
  startStopButton.textContent = "Start";
}

// Increment the stopwatch
function incrementStopwatch() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  updateStopwatchDisplay();
}

// Update the stopwatch display
function updateStopwatchDisplay() {
  hoursDisplay.textContent = formatTime(hours);
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  millisecondsDisplay.textContent = formatTime(milliseconds, true);
}

// Format time values (add leading zeros)
function formatTime(time, includeMilliseconds = false) {
  let formattedTime = time.toString().padStart(2, "0");
  if (includeMilliseconds) {
    formattedTime = formattedTime.padStart(3, "0").substring(0, 2);
  }
  return formattedTime;
}