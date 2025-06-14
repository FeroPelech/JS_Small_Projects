const playArea = {};
const player = {};
let gameObj;
// const data = {
//   data: [
//     {
//       icon: "\u0026#8902;",
//       value: 10,
//     },
//     {
//       icon: "\u0026#10031;",
//       value: 30,
//     },
//     {
//       icon: "\u0026#10036;",
//       value: 50,
//     },
//     {
//       icon: "\u0026#10042;",
//       value: 70,
//     },
//     {
//       icon: "\u0026#10084;",
//       value: 75,
//     },
//     {
//       icon: "\u0026#9813;",
//       value: 50,
//     },
//     {
//       icon: "\u0026#9822;",
//       value: 60,
//     },
//     {
//       icon: "\u0026#9924;",
//       value: 40,
//     },
//     {
//       icon: "\u0026#9971;",
//       value: 100,
//     },
//     {
//       icon: "\u0026#9729;",
//       value: -50,
//     },
//     {
//       icon: "\u0026#9785;",
//       value: -100,
//     },
//     {
//       icon: "\u0026#9760;",
//       value: -250,
//     },
//     {
//       icon: "\u0026#9791;",
//       value: -20,
//     },
//   ],
// };

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
console.log(playArea);
document.addEventListener("DOMContentLoaded", getData);

player.score = 0;
player.items = 3;

playArea.btns.forEach((e) => {
  console.log(e);
  e.addEventListener("click", handleBtn);
});

function getData() {
  fetch("https://discoveryvip.com/shared/json.php?f=game")
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      gameObj = data.data;
      console.log(gameObj);
    });
  console.log("DOOOOm");
}

function handleBtn(e) {
  console.log(e.target.classList.contains("newGame"));
  if (e.target.classList.contains("newGame")) {
    console.log("Holla");
    startGame();
  }
}

function startGame() {
  console.log("start");
}
