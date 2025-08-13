const rep = document.querySelectorAll(".copyMe");
let holder = {};

rep.forEach((e, index) => {
  console.log(e);
  console.log(index);
  e.addEventListener("click", (e) => {
    console.log(index);
    holder.obj = e.cloneNode(true);
    console.log(holder.obj);
  });
  e.style.left = index * 100 + "px";
});
