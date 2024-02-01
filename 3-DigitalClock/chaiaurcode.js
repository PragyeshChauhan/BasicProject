const clock = document.getElementById('clock');
const ClockDate = document.getElementById('date');
const body = document.querySelector('body');
function generateRandomColor() {
  var hexaNumber = '0123456789abcdefABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexaNumber[Math.floor(Math.random() * 22)];
  }
  return color;
}
var date = new Date();
clock.innerHTML = date.toLocaleTimeString();
//for time set interval 1sec to update screen every second
setInterval(function () {
  const date1 = new Date();
  const localTime = date1.toLocaleTimeString();
  clock.innerHTML = localTime;
  clock.style.background = generateRandomColor();
  // clock.style.color = 'black';
}, 1000);
ClockDate.innerHTML = date.toDateString();
setInterval(function () {
  ClockDate.style.backgroundColor = generateRandomColor();
}, 1000 * 60 * 60 * 24);
