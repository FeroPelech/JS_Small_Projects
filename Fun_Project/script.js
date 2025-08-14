const rep = document.querySelectorAll(".copyMe");
let holder = {};

rep.forEach((e, index) => {
  console.log(e);
  console.log(index);
  e.addEventListener("click", (e) => {
    console.log(index);
    holder.obj = e.cloneNode(true);
    holder.obj.style.cursor = "move";
    holder.obj.classList.add("newb");
    console.log(holder.obj);
  });
  e.style.left = index * 100 + "px";
});
