const btn = document.querySelector("button");
const tadaa = new Audio(`./sounds/tadaa.mp3`);

btn.addEventListener("click", () => {
  let dur = tadaa.duration;
  console.log(dur);
  let muted = tadaa.muted;
  tadaa.play();
  console.log(muted);
});
