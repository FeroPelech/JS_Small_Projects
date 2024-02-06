const header = document.getElementById("header");
const title = document.getElementById("title");
const except = document.getElementById("except");
const profilImg = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgText = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  except.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit";
  profilImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/thumb/women/28.jpg" alt="">';
  name.innerHTML = "Janka Mrkvova";
  date.innerHTML = "Apr 02 1962";
  animatedBgs.forEach((e) => e.classList.remove("animated-bg"));
  animatedBgText.forEach((e) => e.classList.remove("animated-bg-text"));
}
