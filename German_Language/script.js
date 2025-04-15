let content = [];
let workArray = [];
let germanWords = [];
let slovakWords = [];
let englishWords = [];
const container = document.querySelector(".container");
const slovakBtn = document.querySelector(".Slovak");
const germanBtn = document.querySelector(".German");
// console.log(germanBtn);

// Načítanie súboru po kliknutí na vlastné tlačidlo
document
  .getElementById("customFileButton")
  .addEventListener("click", function () {
    // Spustí kliknutie na skrytý input pre výber súboru
    document.getElementById("fileInput").click();
  });

// Po výbere súboru
document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0]; // Získať vybraný súbor
  if (!file) {
    alert("Please select a file first.");
    return;
  }

  const reader = new FileReader();

  // Po načítaní súboru, spracovať jeho obsah
  reader.onload = function (event) {
    const fileContent = event.target.result; // Obsah súboru
    // console.log(fileContent); // Výpis obsahu do konzoly
    // console.log(typeof fileContent);
    rows(fileContent);

    // Zobraziť obsah súboru v HTML
    // document.getElementById("fileContent").innerText = fileContent;
  };

  // Načítať súbor ako text
  reader.readAsText(file);
});

function rows(fileContent) {
  // console.log(typeof fileContent === "string");
  if (typeof fileContent === "string") {
    content = fileContent.split("\r\n");
  }
  for (let i = 0; i < content.length; i++) {
    workArray = content[i].split(" - ");
    slovakWords.push(workArray[0]);
    germanWords.push(workArray[1]);
    englishWords.push(workArray[2]);
    // console.log(slovakWords[i]);
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

    const newDiv = document.createElement("div");
    newDiv.className = `index ${i}`;
    newDiv.textContent = wordsShowed[i];
    // console.log(newDiv);
    container.appendChild(newDiv);
    // console.log(words[i]);
    const newInput = document.createElement("input");
    newInput.className = `index ${i}`;
    // console.log(newInput);
    container.appendChild(newInput);

    const checkBtn = document.createElement("button");
    checkBtn.className = `checkBtn ${i}`;
    checkBtn.textContent = "Check!";
    container.appendChild(checkBtn);
    checkBtn.addEventListener("click", () => {
      const userInput = newInput.value.trim();
      if (userInput.toLowerCase() === checkWords[i].toLowerCase()) {
        newInput.style.border = "2px solid green";
        newInput.style.boxShadow = "0 0 20px 4px green";
      } else {
        newInput.style.border = "2px solid red";
        newInput.style.boxShadow = "0 0 20px 4px red";
      }
      console.log(userInput);
    });
    // console.log(checkBtn);
  }
}
