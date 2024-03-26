const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector(".btn");
const panel = document.getElementById("panel");
let selectedEmoji = "";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedEmoji = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  if (selectedEmoji != "") {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedEmoji}</strong>
    <p>We'll use your feedback to improve our special services</p>
    `;
  } else {
    panel.innerHTML = `
    <p>You didn't choose!</p>
    `;
  }
});

function removeActive() {
  ratings.forEach((e) => {
    e.classList.remove("active");
  });
}
