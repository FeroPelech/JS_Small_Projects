const rep = document.querySelectorAll(".copyMe");
const garbage = document.getElementById("garbage");
const minTop = 300;
const maxTop = window.innerHeight - 100;

let holder = {};

rep.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    holder.obj = ele.cloneNode(true);
    holder.obj.style.cursor = "move";
    holder.obj.classList.add("newb");
    holder.obj.style.position = "absolute";
    holder.obj.style.backgroundColor = ranColor();
    holder.obj.style.left = ele.offsetLeft + "px";
    holder.obj.style.top =
      Math.floor(Math.random() * (maxTop - minTop) + minTop) + "px";

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
    drager(holder.obj);
  });
  ele.style.left = index * 100 + "px";
});

function ranColor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    hex = ("0" + hex).slice(-2);
    return hex;
  }
  return "#" + c() + c() + c();
}

function drager(el) {
  let pos = {};
  el.onmousedown = dragMouse;
  function dragMouse(e) {
    pos.nx = e.clientX;
    pos.ny = e.clientY;
    document.onmouseup = function () {
      document.onmouseup = null;
      document.onmousedown = null;
    };
    document.onmousemove = function (e) {
      pos.ox = pos.nx - e.clientX;
      pos.oy = pos.ny - e.clientY;
      pos.nx = e.clientX;
      pos.ny = e.clientY;
      if (isCollide(el)) {
        el.onmousedown = null;
        el.parentElement.removeChild(el);
      }
      el.style.top = el.offsetTop - pos.oy + "px";
      el.style.left = el.offsetLeft - pos.ox + "px";
    };
  }
}

function isCollide(a) {
  let aRect = a.getBoundingClientRect();
  let bRect = garbage.getBoundingClientRect();
  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
