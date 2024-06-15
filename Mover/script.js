let myBlock;
let list;
let funList = [];
document.addEventListener("DOMContentLoaded", () => {
  myBlock = document.createElement("div");
  myBlock.className = "myBlock";
  myBlock.textContent = "Hello";
  myBlock.style.width = "100px";
  myBlock.style.height = "100px";
  myBlock.style.backgroundColor = "Blue";
  myBlock.style.color = "White";
  myBlock.style.lineHeight = "100px";
  myBlock.style.textAlign = "center";
  myBlock.style.position = "absolute";
  myBlock.style.top = "100px";
  myBlock.style.left = "150px";
  document.body.appendChild(myBlock);
  list = document.createElement("div");
  document.body.appendChild(list);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
  let key = e.key;
  if (key === "ArrowDown") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Down");
  } else if (key === "ArrowUp") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Up");
  } else if (key === "ArrowRight") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Right");
  } else if (key === "ArrowLeft") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Left");
  }
});

function addFun(val) {
  funList.push(val);
  let span = document.createElement("span");
  span.textContent = " + " + val;
  span.style.padding = "10px";

  console.log(span);
  console.log(funList);
}

function randomColor() {
  return "#" + Math.random().toString(16).substring(9);
}

function goLeft() {
  let temp = myBlock.offsetLeft;
  temp = temp - 50;
  myBlock.style.left = temp + "px";
}

function goRight() {
  let temp = myBlock.offsetLeft;
  temp = temp + 50;
  myBlock.style.left = temp + "px";
}

function goUp() {
  let temp = myBlock.offsetTop;
  temp = temp - 50;
  myBlock.style.top = temp + "px";
}

function goDown() {
  let temp = myBlock.offsetTop;
  temp = temp + 50;
  myBlock.style.top = temp + "px";
}
