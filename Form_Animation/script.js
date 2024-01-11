const label = document.querySelectorAll(".form-control label");
console.log(label[0].textContent);
label.forEach((element) => {
  element.innerHTML = element.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 100}ms">${letter}</span>`
    )
    .join("");
});
