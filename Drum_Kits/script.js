const kits = ["Crash", "Kick", "Snare", "Tom"];
const containerBtn = document.querySelector(".button-container");

kits.forEach((e) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  containerBtn.appendChild(btn);
});