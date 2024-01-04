const pictures = document.querySelectorAll(".panel");

pictures.forEach((panel) => {
  panel.addEventListener("click", () => {
    let x = panel.getElementsByTagName("h3")[0].innerHTML;
    console.log(x);
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  pictures.forEach((panel) => {
    panel.classList.remove("active");
  });
}
