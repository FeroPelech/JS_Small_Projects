const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
console.log(menu);

//Create menu content

const label = document.createElement("label");
label.setAttribute("for", "inputDictionary");
label.innerHTML = "Choose dictionary.";
console.log(label);

// Added menu elements to the menu
menu.appendChild(label);
