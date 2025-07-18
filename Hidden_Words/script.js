window.addEventListener("load", init);

function init() {
  let div = document.createElement("div");
  div.setAttribute("class", "message");
  div.innerText = "Press start button";
  document.body.appendChild(div);
  let btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "Start Game";
  document.body.appendChild(btn);
  let div1 = document.createElement("div");
  console.log(btn);
}
