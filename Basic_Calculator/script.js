const btns = document.querySelectorAll("button");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    const btnValue = e.textContent;
    console.log(btnValue);
  });
});
