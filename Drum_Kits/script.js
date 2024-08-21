const kits = ["Crash", "Kick", "Snare", "Tom"];
const containerBtn = document.querySelector(".button-container");

kits.forEach((e) => {
  const btn = document.createElement("button");
  btn.textContent = e;
  btn.classList.add("btn");
  containerBtn.appendChild(btn);
  const Audio = document.createElement("audio");
  Audio.src = "sounds/" + e + ".mp3";
  containerBtn.appendChild(Audio);
  btn.addEventListener("click", () => {
    Audio.play();
  });
});
