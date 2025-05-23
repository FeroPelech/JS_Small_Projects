let content = [];
let workArray = [];
let germanWords = [];
let slovakWords = [];
let englishWords = [];
const container = document.querySelector(".container");
const slovakBtn = document.querySelector(".Slovak");
const germanBtn = document.querySelector(".German");
const englishBtn = document.querySelector(".English");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const specialGermanSign = document.querySelector(".specialSign");

const checkAllBtn = document.createElement("button");
checkAllBtn.className = "checkAllBtn";
checkAllBtn.textContent = "Check all answers!";
const clearAllInputs = document.createElement("button");
clearAllInputs.className = "clearBtn";
clearAllInputs.textContent = "Clear inputs.";

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
  content = [];
  workArray = [];
  germanWords = [];
  slovakWords = [];
  englishWords = [];

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
  englishBtn.addEventListener("click", () => {
    loadWords(slovakWords, englishWords);
  });
}

function loadWords(wordsShowed, checkWords) {
  let inputs = [];
  container.innerHTML = "";
  specialGermanSign.innerHTML = "Special german sign: ü ß ö ä";

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

    inputs.push(newInput);

    newInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" && i < inputs.length - 1) {
        e.preventDefault();
        inputs[i + 1].focus();
      }
      if (e.key === "ArrowUp" && i > 0) {
        e.preventDefault();
        inputs[i - 1].focus();
      }
      if (e.key === "Enter") {
        e.preventDefault();
        checkBtn.click();
      }
    });

    container.appendChild(checkAllBtn);
    container.appendChild(clearAllInputs);

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
  if (inputs.length > 0) {
    inputs[0].focus();
  }

  checkAllBtn.onclick = () => {
    inputs.forEach((e, i) => {
      const userInputAll = e.value.trim();
      const parent = e.parentElement;
      const existingAnswer = parent.querySelector(".correct-answer");

      if (existingAnswer) {
        parent.removeChild(existingAnswer);
      }
      if (userInputAll.toLowerCase() === checkWords[i].toLowerCase()) {
        e.style.border = "2px solid green";
        e.style.boxShadow = "0 0 20px 4px green";
      } else {
        e.style.border = "2px solid red";
        e.style.boxShadow = "0 0 20px 4px red";
        const correctDiv = document.createElement("div");
        correctDiv.className = "correct-answer";
        correctDiv.style.color = "#888";
        correctDiv.style.fontSize = "0.85em";
        correctDiv.textContent = `    ${checkWords[i]}`;
        parent.appendChild(correctDiv);
      }
    });
  };
  clearAllInputs.onclick = () => {
    inputs.forEach((e, i) => {
      e.value = "";
      e.style.border = "none";
      e.style.boxShadow = "none";

      const parent = e.parentElement;
      const existingAnswer = parent.querySelector(".correct-answer");
      if (existingAnswer && existingAnswer.parentNode === parent) {
        existingAnswer.remove();
      }
    });
  };
}
