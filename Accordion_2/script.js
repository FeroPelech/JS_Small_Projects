const mainClass = document.querySelectorAll(".main");
const contentClass = document.querySelectorAll(".content");

for (let i = 0; i < mainClass.length; i++) {
  mainClass[i].addEventListener("click", () => {
    console.log(mainClass[i].nextElementSibling);
    clearActive();
    mainClass[i].nextElementSibling.classList.toggle("active");
  });
}

function clearActive() {
  for (let i = 0; i < contentClass.length; i++) {
    contentClass[i].classList.remove("active");
  }
}
