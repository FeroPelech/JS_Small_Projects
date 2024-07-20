const containerElemenet = document.querySelector(".container");
const careers = ["Influencer", "Youtube", "Electrician", "Freelancer"];
let index = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerElemenet.innerHTML = `I am a ${careers[index].slice(
    0,
    characterIndex
  )}`;
  if (characterIndex === careers[index].length) {
    index++;
    characterIndex = 0;
  }

  if (index === careers.length) {
    index = 0;
  }
  setTimeout(updateText, 400);
}
