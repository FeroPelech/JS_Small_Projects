const containerElemenet = document.querySelector(".container");
const careers = ["Influencer", "Youtube", "Electrician", "Freelancer"];
let index = 0;
let characterIndex = 0;

updateText();

function updateText() {
  containerElemenet.innerHTML = `I am a ${careers[index].slice(
    0,
    characterIndex
  )}`;
  characterIndex++;
  setTimeout(updateText, 400);
}
