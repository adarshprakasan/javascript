let minute = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");

let min = 0;
let sec = 0;
let timer;

function startClock() {
  timer = setInterval(() => {
    sec++;
    // seconds.innerHTML = `${sec.padStart(2, 0)}`;
    if (sec <= 9) {
      seconds.innerHTML = `0${sec}`;
    } else {
      seconds.innerHTML = sec;
    }

    if (sec === 59) {
      sec = -1;

      setTimeout(() => {
        min++;

        if (min <= 9) {
          minute.innerHTML = `0${min}`;
        } else {
          minute.innerHTML = min;
        }
      }, 1000);
    }
    //^-------------------------------------------------------
    // if (sec === 60) {
    //   sec = 0;
    //   min++;
    // }
    // message.innerText = `${string(min).padstart(2, "0")}:${string(sec).padstart(
    //   2,
    //   "0"
    // )}}`;
  }, 1000);
}

function stopClock() {
  clearInterval(timer);
}

function resetClock() {
  clearInterval(timer);
  seconds.innerHTML = "00";
  minute.innerHTML = "00";
  sec = 0;
  min = 0;
}
