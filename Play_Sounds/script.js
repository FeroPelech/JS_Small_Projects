const btn = document.querySelectorAll("button");
const tadaa = new Audio(`./sounds/tadaa.mp3`);
const chearing = new Audio("./sounds/chearing.wav");
const win = new Audio("./sounds/win.mp3");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (btn[i].className == "tadaa") {
      chearing.pause();
      win.pause();
      tadaa.play();
    } else if (btn[i].className == "win") {
      chearing.pause();
      tadaa.pause();
      win.play();
    } else {
      win.pause();
      tadaa.pause();
      chearing.play();
    }
  });
}
