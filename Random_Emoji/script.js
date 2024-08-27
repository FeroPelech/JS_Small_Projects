const btn = document.querySelector("button");
const para = document.querySelector("p");
console.log(para);

const Emoji = [];

async function getEmoji() {
  let response = await fetch(
    "http://emoji-api.com/emojis?access_key=6d34f1e3d8da09a09dd1598e030f5603e89ac084"
  );
  data = await response.json();
  for (let i = 0; i < 1500; i++) {
    Emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * Emoji.length);
  btn.innerText = Emoji[randomNum].emojiName;
  para.innerText = Emoji[randomNum].emojiCode;
});
