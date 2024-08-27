const navbar = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");
const image = document.querySelector("img");

console.log(image.src);
console.log(bottomContainer.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50) {
    navbar.classList.add("active");
    image.src =
      "http://127.0.0.1:5500/JS_Small_Projects/Sticky_Navbar/Logo/BlackLogo.png";
  } else {
    navbar.classList.remove("active");
    image.src =
      "http://127.0.0.1:5500/JS_Small_Projects/Sticky_Navbar/Logo/logo.png";
  }
});
