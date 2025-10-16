const mainClass = document.querySelectorAll(".main");
const contentClass = document.querySelectorAll(".content");

for (let i = 0; i < mainClass.length; i++) {
  mainClass[i].addEventListener("click", () => {
    console.log(mainClass[i]);
  });
}
