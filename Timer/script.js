const restBtn = document.getElementById("reset");
const playBtn = document.getElementById("play");
const timerEl = document.getElementById("timer");
const root = document.querySelector(":root");

const totalseconds = 60;
let playing = false;
let currentSeconds = totalseconds;
timerEl.innerText = formatTime(totalseconds);

playBtn.addEventListener("click", () => {
  playing = !playing;
  playBtn.classList.toggle("play");
  playBtn.classList.toggle("bg-green-500");
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${newSeconds
    .toString()
    .padStart(2, "0")}`;
}
