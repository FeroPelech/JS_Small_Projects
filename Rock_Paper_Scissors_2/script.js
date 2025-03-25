const container = document.querySelector(".container");

const result_counter = document.createElement("div");
const result_field = document.createElement("div");
const result_images = document.createElement("div");
const user_result = document.createElement("span");
const cpu_result = document.createElement("span");
const imageR = document.createElement("img");
const imagePC = document.createElement("img");
const imageS = document.createElement("img");
const imageS1 = document.createElement("img");
const imageS2 = document.createElement("img");
const result = document.createElement("div");
const option_images = document.createElement("div");
const option_image = document.createElement("span");
const option_image1 = document.createElement("span");
const option_image2 = document.createElement("span");
const para = document.createElement("p");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const paraR = document.createElement("p");
const paraR1 = document.createElement("p");
const paraRPC = document.createElement("p");
const btnReset = document.createElement("button");
const option_Array = [
  "./images/rock.png",
  "./images/paper.png",
  "./images/scissors.png",
];
let computer = 0;
let player = 0;

result_field.classList.add("result_field");
result_images.classList.add("result_images");
user_result.classList.add("user_result");
cpu_result.classList.add("cpu_result");
result.classList.add("result");
result.textContent = "Let's Play!";
paraR.textContent = "Scoreboard";
imageR.src = "./images/rock.png";
imageR.alt = "Rock";
imagePC.src = "./images/paper.png";
imagePC.alt = "Paper";
imageS.src = "./images/rock.png";
imageS.alt = "Scissors";
imageS1.src = "./images/paper.png";
imageS1.alt = "Scissors1";
imageS2.src = "./images/scissors.png";
imageS2.alt = "Scissors2";
para.textContent = "Rock";
para1.textContent = "Papper";
para2.textContent = "Scissors";
paraR1.textContent = "Player: " + player;
paraRPC.textContent = "Computer: " + computer;
option_images.classList.add("option_images");
option_image.classList.add("option_image");
option_image1.classList.add("option_image");
option_image2.classList.add("option_image");
result_counter.classList.add("result_counter");
btnReset.classList.add("btnReset");

container.appendChild(result_field);
result_field.appendChild(result_images);
result_images.appendChild(user_result);
result_images.appendChild(cpu_result);
user_result.appendChild(imageR);
cpu_result.appendChild(imagePC);
result_field.appendChild(result);
option_images.appendChild(option_image);
option_images.appendChild(option_image1);
option_images.appendChild(option_image2);
option_image.appendChild(imageS);
option_image.appendChild(para);
option_image1.appendChild(imageS1);
option_image1.appendChild(para1);
option_image2.appendChild(imageS2);
option_image2.appendChild(para2);
result_counter.appendChild(paraR);
result_counter.appendChild(paraR1);
result_counter.appendChild(paraRPC);
container.appendChild(option_images);
container.appendChild(result_counter);

option_image.addEventListener("click", () => {
  option_image.classList.add("active");
  option_image1.classList.remove("active");
  option_image2.classList.remove("active");
  imageR.src = "./images/rock.png";
  computerChoose();
  checkResult();
});

option_image1.addEventListener("click", () => {
  option_image1.classList.add("active");
  option_image.classList.remove("active");
  option_image2.classList.remove("active");
  imageR.src = "./images/paper.png";
  computerChoose();
  checkResult();
});

option_image2.addEventListener("click", () => {
  option_image2.classList.add("active");
  option_image.classList.remove("active");
  option_image1.classList.remove("active");
  imageR.src = "./images/scissors.png";
  computerChoose();
  checkResult();
});

function computerChoose() {
  let random_number = Math.floor(Math.random() * 3);
  imagePC.src = option_Array[random_number];
}

function checkResult() {
  console.log(imagePC.src);
  console.log(imagePC.src.includes("/images/scissors.png"));
  if (
    imagePC.src.includes("/images/scissors.png") &
      imageR.src.includes("/images/paper.png") ||
    imagePC.src.includes("/images/paper.png") &
      imageR.src.includes("/images/rock.png") ||
    imagePC.src.includes("/images/rock.png") &
      imageR.src.includes("/images/scissors.png")
  ) {
    computer++;
    paraRPC.textContent = "Computer: " + computer;
  } else if (
    imagePC.src.includes("/images/paper.png") &
      imageR.src.includes("/images/scissors.png") ||
    imagePC.src.includes("/images/rock.png") &
      imageR.src.includes("/images/paper.png") ||
    imagePC.src.includes("/images/scissors.png") &
      imageR.src.includes("/images/rock.png")
  ) {
    player++;
    paraR1.textContent = "Player: " + player;
  }
}
