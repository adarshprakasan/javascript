let red = document.getElementById("red");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let seconds = document.getElementById("seconds");
let milliSec = document.getElementById("milliSec");
let stopButton = document.getElementById("stopButton");

let timer;

function start() {
  stopButton.innerHTML = "Stop";

  if (stopButton.innerHTML === "Stop") {
    clearInterval(timer);
  }

  setTimeout(() => {
    red.classList.toggle("redActive");
  }, 3000);
  setTimeout(() => {
    orange.classList.toggle("orangeActive");
  }, 5000);

  setTimeout(() => {
    green.classList.toggle("greenActive");
    let sec = 0;
    let milliS = 0;

    timer = setInterval(() => {
      milliS++;

      if (milliS <= 9) {
        milliSec.innerHTML = `0${milliS}`;
      } else {
        milliSec.innerHTML = milliS;
      }

      if (milliS === 59) {
        milliS = -1;

        setTimeout(() => {
          sec++;

          if (sec <= 9) {
            seconds.innerHTML = `0${sec}`;
          } else {
            seconds.innerHTML = sec;
          }
        }, 1000);
      }
    }, 100);
  }, 8000);
}
