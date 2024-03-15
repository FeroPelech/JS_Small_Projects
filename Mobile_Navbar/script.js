const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav li ul");

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();
  });
});
