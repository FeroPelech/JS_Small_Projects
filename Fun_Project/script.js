const rep = document.querySelectorAll(".copyMe");

rep.forEach((e, index) => {
  console.log(e);
  console.log(index);
  e.addEventListener("click", (e) => {
    console.log(index);
  });
  e.style.left = index * 100 + "px";
});
