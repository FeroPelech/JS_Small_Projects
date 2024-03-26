const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector(".btn");
const panel = document.getElementById("panel");

panel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
  }
});

function removeActive() {
  ratings.forEach((e) => {
    e.classList.remove("active");
  });
}
