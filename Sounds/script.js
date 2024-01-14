const sounds = [
  "Applause",
  "Boo-and-laugh",
  "Chearing",
  "Gasp",
  "Tadaa",
  "Win",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
