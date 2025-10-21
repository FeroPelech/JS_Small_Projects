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
// const menuBtn = document.createElement("button");
// menuBtn.setAttribute("class", "menuBtn");
console.log(input);

// Added menu elements to the menu
menu.appendChild(label);
menu.appendChild(input);
menu.appendChild(mixBtn);

//Create container content
const divContent = document.createElement("div");
divContent.setAttribute("class", "ContainerDiv");
divContent.innerHTML = "Just check";

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
}
