const counters = document.querySelectorAll(".counter");

counters.forEach((e) => {
  e.innerText = "0";
  incrementCounter(e);
});

function incrementCounter(e) {
  let currentNum = +e.innerText;
  const dataCeil = e.getAttribute("data-ceil");
  const increment = dataCeil / 15;
  currentNum = Math.ceil(currentNum + increment);
  e.innerText = currentNum;
  console.log(dataCeil);
}
