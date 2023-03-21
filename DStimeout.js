let time = 15;
let min = Math.floor(time / 60);
let sec = time % 60;
let countdown = setInterval(update, 1000);

function update() {
  sec = sec < 10 ? "0" + sec : sec;
  console.log(` ${min} : ${sec}`);

  if (min == 0 && sec == 0) {
    clearInterval(countdown);
  } else {
    time--;
    min = Math.floor(time / 60);
    sec = time % 60;
  }
}
