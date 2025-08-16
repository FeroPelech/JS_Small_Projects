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
    holder.obj.style.backgroundColor = ranColor();
    holder.obj.style.left = ele.offsetLeft + "px";
    holder.obj.style.top = ele.offsetTop + 200 + "px";

    holder.obj.startX = ele.offsetLeft;
    holder.obj.startY = ele.offsetTop;

    holder.obj.moves = Math.floor(Math.random() * 25);
    holder.obj.int = setInterval(mover, 25);

    function mover() {
      if (holder.obj.moves <= 0) {
        clearInterval(holder.obj.int);
      } else {
        holder.obj.moves--;
        holder.obj.startY += 10;
        holder.obj.startX += 1;
        holder.obj.style.top = holder.obj.startY + "px";
        holder.obj.style.left = holder.obj.startX + "px";
      }
    }

    document.body.appendChild(holder.obj);
    console.log(holder.obj);
    drager(holder.obj);
  });
  ele.style.left = index * 100 + "px";
});

function ranColor() {}

function drager(el) {
  let pos = {};
  el.onmousedown = dragMouse;
  function dragMouse(e) {
    pos.nx = e.clientX;
    pos.ny = e.clientY;
    console.log(pos.nx, pos.ny);
    document.onmouseup = function () {
      document.onmouseup = null;
      document.onmousedown = null;
    };
    document.onmousemove = function (e) {
      pos.ox = pos.nx - e.clientX;
      pos.oy = pos.ny - e.clientY;
      pos.nx = e.clientX;
      pos.ny = e.clientY;
      el.style.top = el.offsetTop - pos.oy + "px";
      el.style.left = el.offsetLeft - pos.ox + "px";
    };
  }
}
