let slideIndex = 0;
let timer;
const myImages = [
  {
    img: "https://images.pexels.com/photos/206369/pexels-photo-206369.jpeg",
    caption: "Hello World Image 1",
  },
  {
    img: "https://images.pexels.com/photos/206369/pexels-photo-206369.jpeg",
    caption: "Hello World Image 2",
  },
  {
    img: "https://images.pexels.com/photos/206369/pexels-photo-206369.jpeg",
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
  }
}
