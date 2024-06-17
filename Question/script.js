const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");
const answers = ["It will good", "Maybe", "Probably", "I dont know", "Emmm"];
button.addEventListener("click", () => {
  console.log(question.value);
  let responds = Math.floor(Math.random() * answers.length);
  console.log(answers[responds]);
  message.innerText = question.value + " " + answers[responds];
});
