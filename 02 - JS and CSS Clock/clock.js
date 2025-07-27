const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
let prevSeconds = 0;
let prevMinutes = 0;
let prevHours = 0;
function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  // Prevent backwards transition at 0 seconds by resetting transition temporarily
  if (seconds === 0) {
    secondsHand.style.transition = "none";
  } else if (prevSeconds === 59) {
    // Re-enable transition when jumping from 59 -> 0
    secondsHand.style.transition = "all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  const secondsDegrees = (seconds / 60) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;

  prevSeconds = seconds;
  prevMinutes = minutes;
  prevHours = hours;
}

setInterval(setDate, 1000);
