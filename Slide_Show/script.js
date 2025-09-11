let slideIndex = 0;
let timer;
const myImages = [
  {
    img: "https://images.pexels.com/photos/206369/pexels-photo-206369.jpeg",
    caption: "Hello World Image 1",
  },
  {
    img: "https://images.pexels.com/photos/18886713/pexels-photo-18886713.jpeg",
    caption: "Hello World Image 2",
  },
  {
    img: "https://images.pexels.com/photos/1615848/pexels-photo-1615848.jpeg",
    caption: "Hello World Image 3",
  },
];
builder();

function builder() {
  for (let x = 0; x < myImages.length; x++) {
    let slide = document.createElement("div");
    slide.setAttribute("class", "mySlide fade");
    let img = document.createElement("img");
    img.setAttribute("src", myImages[x].img);
    let cap = document.createElement("div");
    cap.classList.add("caption");
    cap.innerText = myImages[x].caption;
    slide.appendChild(img);
    slide.appendChild(cap);
    document.querySelector(".container").appendChild(slide);
    let span = document.createElement("span");
    span.classList.add("dot");
    span.addEventListener("click", () => {
      moveSlide(x);
    });
    document.querySelector(".indicator").appendChild(span);
  }
  playSlide();
}
function moveSlide(num) {
  slideIndex = num;
  clearTimeout(timer);
  playSlide();
}
function playSlide() {
  const slides = document.querySelectorAll(".mySlide");
  const dots = document.querySelectorAll(".dot");
  const active = document.querySelector(".active");
  if (active != null) {
    active.classList.remove("active");
  }
  if (slideIndex + 1 > slides.length) {
    slideIndex = 0;
  }
  slides.forEach((e) => {
    e.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
  slideIndex++;
  timer = setTimeout(playSlide, 3000);
}
