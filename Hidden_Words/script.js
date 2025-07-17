window.addEventListener("load", init);

function init() {
  let div = document.createElement("div");
  div.setAttribute("class", "message");
  div.innerText = "Press start button";
  console.log(div);
}
