const rep = document.querySelectorAll(".copyMe");
let holder = {};

rep.forEach((ele, index) => {
  console.log(ele);
  console.log(index);
  ele.addEventListener("click", (e) => {
    console.log(index);
    holder.obj = ele.cloneNode(true);
    holder.obj.style.cursor = "move";
    holder.obj.classList.add("newb");
    holder.obj.style.backgroundColor = "green";
    // holder.obj.style.position = "absolute";
    holder.obj.style.left = ele.offsetLeft + "px";
    holder.obj.style.top = ele.offsetTop + 200 + "px";
    holder.obj.moves = Math.floor(Math.random() * 25);

    document.body.appendChild(holder.obj);
    console.log(holder.obj);
  });
  ele.style.left = index * 100 + "px";
});
