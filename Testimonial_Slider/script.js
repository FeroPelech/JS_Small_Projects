const testimonial = [
  {
    name: "Thomas Wayne",
    photoURL:
      "https://images.unsplash.com/photo-1588862081167-d5b98006637e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Why do we fall sir? So that we can learn to pick ourselves up",
    alt: "Batman",
  },
  {
    name: "Jor El",
    photoURL:
      "https://images.unsplash.com/photo-1558680689-ce686c5e2fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "They will race behind you, they will stumble, they will fall. But in time, they will join you in the sun, Kal. In time, you will help them accomplish wonders.",
    alt: "Super-Man",
  },
  {
    name: "Viseris",
    photoURL:
      "https://images.unsplash.com/photo-1695840210597-4020baf877ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "This World Doesn't Need A Hero; It Needs A Professional.",
    alt: "Witcher",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateHtml();

function updateHtml() {
  const { name, photoURL, text, alt } = testimonial[idx];
  imgEl.src = photoURL;
  imgEl.alt = alt;
  textEl.innerHTML = text;
  usernameEl.innerHTML = name;
}
