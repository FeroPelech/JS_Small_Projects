const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
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
