let content = [];
let workArray = [];
let germanWords = [];
let slovakWords = [];
let englishWords = [];

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
    console.log(fileContent); // Výpis obsahu do konzoly
    console.log(typeof fileContent);
    rows(fileContent);

    // Zobraziť obsah súboru v HTML
    document.getElementById("fileContent").innerText = fileContent;
  };

  // Načítať súbor ako text
  reader.readAsText(file);
});

function rows(fileContent) {
  console.log(typeof fileContent === "string");
  if (typeof fileContent === "string") {
    content = fileContent.split("\r\n");
    // console.log(workArray);
  }
  for (let i = 0; i < content.length; i++) {
    workArray = content[i].split(" - ");
    slovakWords.push(workArray[0]);
    germanWords.push(workArray[1]);
    englishWords.push(workArray[2]);
  }
  console.log(germanWords);
  console.log(slovakWords);
  console.log(englishWords);
}
