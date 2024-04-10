const container = document.querySelector(".container");
const unsplashPics = "https://source.unsplash.com/random/";
const rows = 5;
const imageList = [];

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  const randomSize = getRandomSize();

  if (!imageList.includes(randomSize)) {
    imageList.push(randomSize);
    img.src = `${unsplashPics}+${imageList[i]}`;
    container.appendChild(img);
    i++;
  }
  i--;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}
