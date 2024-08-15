const counters = document.querySelectorAll(".counter");

counters.forEach((e) => {
  e.innerText = "0";
  incrementCounter(e);
});

function incrementCounter(e) {
  const currentNum = +counters.innerText;
  const dataCeil = e.getAttribute("data-ceil");
  console.log(dataCeil);
}
