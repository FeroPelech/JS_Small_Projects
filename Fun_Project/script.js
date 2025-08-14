const rep = document.querySelectorAll(".copyMe");
let holder = {};

rep.forEach((e, index) => {
  console.log(e);
  console.log(index);
  e.addEventListener("click", (ele) => {
    console.log(index);
    holder.obj = ele.cloneNode(true);
    holder.obj.style.cursor = "move";
    holder.obj.classList.add("newb");
    holder.obj.style.backgroundColor = "green";
    holder.obj.style.left = ele.offsetLeft + "px";
    holder.obj.style.top = ele.offsetTop + 200 + "px";
    console.log(holder.obj);
  });
  e.style.left = index * 100 + "px";
});
