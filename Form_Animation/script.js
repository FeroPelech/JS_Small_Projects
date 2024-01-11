const label = document.querySelectorAll(".form-control label");
console.log(label[0].textContent);
label.forEach((element) => {
  element.innerHTML = element.innerText
    .split("")
    .map((letter, index) => `<span>${letter}</span>`)
    .join("");
});
