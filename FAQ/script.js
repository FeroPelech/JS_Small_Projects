const toogles = document.querySelectorAll(".faq-toggle");

toogles.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentNode.classList.toggle("active");
  });
});
