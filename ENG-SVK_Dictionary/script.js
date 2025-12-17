const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
let content = [];
let workArray = [];
let slovakWords = [];
let englishWords = [];
console.log(menu);

//Create menu content

const label = document.createElement("label");
label.setAttribute("for", "inputDictionary");
label.innerHTML = "Choose dictionary.";
const input = document.createElement("input");
input.setAttribute("type", "file");
input.setAttribute("id", "inputDictionary");
input.setAttribute("name", "fileInput");
const mixBtn = document.createElement("button");
mixBtn.setAttribute("class", "mixBtn");
mixBtn.textContent = "MIX";
const loadBtn = document.createElement("button");
loadBtn.setAttribute("class", "loadBtn");
loadBtn.textContent = "Load";
// const menuBtn = document.createElement("button");
// menuBtn.setAttribute("class", "menuBtn");

// Added menu elements to the menu
menu.appendChild(label);
menu.appendChild(input);
menu.appendChild(mixBtn);
menu.appendChild(loadBtn);

//Create container content
const divContent = document.createElement("div");
divContent.setAttribute("class", "containerDiv");
clearAllInputs.textContent = "Clear inputs.";
const clearAllInputs = document.createElement("button");
clearAllInputs.className = "clearBtn";
clearAllInputs.textContent = "Clear All";
const checkAllBtn = document.createElement("button");
checkAllBtn.className = "checkAllBtn";
checkAllBtn.textContent = "Check all answers!";

//Added container elements to the container
container.appendChild(divContent);

//Read data
document
  .getElementById("inputDictionary")
  .addEventListener("change", function () {
    const file = this.files[0];
    if (!file) {
      alert("Please select a file first.");
      return;
    }
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
  slovakWords = [];
  englishWords = [];
  if (typeof fileContent === "string") {
    content = fileContent.split("\r\n");
  }
  for (let i = 0; i < content.length; i++) {
    workArray = content[i].split(" - ");
    englishWords.push(workArray[0]);
    slovakWords.push(workArray[1]);
  }
}

loadBtn.addEventListener("click", () => {
  loadWords(englishWords, slovakWords);
});

function loadWords(eng, svk) {
  let inputs = [];
  for (let i = 0; i < eng.length; i++) {
    const wordDiv = document.createElement("div");
    wordDiv.className = "wordDiv";
    const newWordDiv = document.createElement("div");
    newWordDiv.className = `index${i}`;
    newWordDiv.textContent = eng[i];
    wordDiv.appendChild(newWordDiv);
    const newInput = document.createElement("input");
    newInput.className = `inputIndex${i}`;
    wordDiv.appendChild(newInput);
    const checkBtn = document.createElement("button");
    checkBtn.className = `checkBtn${i}`;
    checkBtn.textContent = "Check!";
    wordDiv.appendChild(checkBtn);
    divContent.appendChild(wordDiv);

    inputs.push(newInput);
    newInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" && i < inputs.length - 1) {
        console.log("down");
        e.preventDefault();
        inputs[i + 1].focus();
      }
      if (e.key === "ArrowUp" && i > 0) {
        e.preventDefault();
        inputs[i - 1].focus();
      }
      if (e.key === "Enter") {
        console.log("Enter");
        e.preventDefault();
        checkBtn.click();
      }
    });
    container.appendChild(checkAllBtn);
    container.appendChild(clearAllInputs);

    checkBtn.addEventListener("click", () => {
      console.log("Check Button");
      const userInput = newInput.value.trim();
      if (userInput.toLowerCase() === checkWords[i].toLowerCase()) {
        console.log("If con");
        newInput.style.border = "2px solid green";
        newInput.style.boxShadow = "0 0 20px 4px green";
      } else {
        console.log("Else in addeventistener");
        newInput.style.border = "2px solid red";
        newInput.style.boxShadow = "0 0 20px 4px red";
      }
    });
  }
  if (inputs.length > 0) {
    inputs[0].focus();
  }
  checkAllBtn.onclick = () => {
    console.log("click");
    inputs.forEach((e, i) => {
      const userInputAll = e.value.trim();
      const parent = e.parentElement;
      const existingAnswer = parent.querySelector(".correct-answer");
      if (existingAnswer) {
        parent.removeChild(existingAnswer);
      }
      if (userInputAll.toLowerCase() === checkWords[i].toLowerCase()) {
        console.log("another if");
        e.style.border = "2px solid green";
        e.style.boxShadow = "0 0 20px 4px green";
      } else {
        e.style.border = "2px solid red";
        e.style.boxShadow = "0 0 20px 4px red";
      }
    });
  };
}
