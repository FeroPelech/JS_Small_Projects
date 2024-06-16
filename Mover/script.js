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
  let key = e.key;
  if (key === "ArrowDown") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Down");
    goDown();
  } else if (key === "ArrowUp") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Up");
    goUp();
  } else if (key === "ArrowRight") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Right");
    goRight();
  } else if (key === "ArrowLeft") {
    myBlock.style.backgroundColor = randomColor();
    addFun("Left");
    goLeft();
  }
});

function addFun(val) {
  let text = "";
  funList.push(val);
  if (funList.length > 10) {
    funList.splice(0, 1);
  }
  let span = document.createElement("span");
  span.textContent = " + " + val;
  span.style.padding = "0px";
  span.style.margin = "0px";
  span.style.border = "1px solid #ddd";
  span.addEventListener("mouseover", () => {
    span.style.backgroundColor = randomColor();
    span.style.color = "white";
  });
  span.addEventListener("mouseout", () => {
    span.style.backgroundColor = "white";
    span.style.color = "black";
  });
  list.appendChild(span);
}

function randomColor() {
  return "#" + Math.random().toString(16).substring(9);
}

function goLeft() {
  if (myBlock.offsetLeft > 50) {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
  }
}

function goRight() {
  if (myBlock.offsetLeft < 800) {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
  }
}

function goUp() {
  if (myBlock.offsetTop > 50) {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
  }
}

function goDown() {
  if (myBlock.offsetTop < 600) {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
  }
}
