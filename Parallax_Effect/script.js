const container = document.querySelector(".container");
const card = document.querySelector(".card");

container.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.width / 2;

  const rotateX = (x / rect.height) * 40;
  const rotateY = (y / rect.width) * 40;

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0) rotateY(0)`;
});
