let content = [];
let workArray = [];
let germanWords = [];
let slovakWords = [];
let englishWords = [];
const container = document.querySelector(".container");
const slovakBtn = document.querySelector(".Slovak");
const germanBtn = document.querySelector(".German");
const fileNameDisplay = document.getElementById("fileNameDisplay");

document
  .getElementById("customFileButton")
  .addEventListener("click", function () {
    document.getElementById("fileInput").click();
  });

document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) {
    alert("Please select a file first.");
    return;
  }

  fileNameDisplay.textContent = `Topic: ${file.name
    .slice(10)
    .replace(".txt", "")}`;
  const reader = new FileReader();

  reader.onload = function (event) {
    const fileContent = event.target.result;
    rows(fileContent);
  };

  reader.readAsText(file);
});

function rows(fileContent) {
  let content = [];
  let workArray = [];
  let germanWords = [];
  let slovakWords = [];
  let englishWords = [];

  if (typeof fileContent === "string") {
    content = fileContent.split("\r\n");
  }
  for (let i = 0; i < content.length; i++) {
    workArray = content[i].split(" - ");
    slovakWords.push(workArray[0]);
    germanWords.push(workArray[1]);
    englishWords.push(workArray[2]);
  }
  slovakBtn.addEventListener("click", () => {
    loadWords(slovakWords, germanWords);
  });
  germanBtn.addEventListener("click", () => {
    loadWords(germanWords, slovakWords);
  });
}

function loadWords(wordsShowed, checkWords) {
  container.innerHTML = "";
  for (let i = 0; i < wordsShowed.length; i++) {
    const wordRow = document.createElement("div");
    wordRow.className = "word-row";
    const newDiv = document.createElement("div");
    newDiv.className = `index ${i}`;
    newDiv.textContent = wordsShowed[i];
    wordRow.appendChild(newDiv);
    const newInput = document.createElement("input");
    newInput.className = `index ${i}`;
    wordRow.appendChild(newInput);

    const checkBtn = document.createElement("button");
    checkBtn.className = `checkBtn ${i}`;
    checkBtn.textContent = "Check!";
    wordRow.appendChild(checkBtn);
    container.appendChild(wordRow);
    checkBtn.addEventListener("click", () => {
      const userInput = newInput.value.trim();
      if (userInput.toLowerCase() === checkWords[i].toLowerCase()) {
        newInput.style.border = "2px solid green";
        newInput.style.boxShadow = "0 0 20px 4px green";
      } else {
        newInput.style.border = "2px solid red";
        newInput.style.boxShadow = "0 0 20px 4px red";
      }
    });
  }
}
