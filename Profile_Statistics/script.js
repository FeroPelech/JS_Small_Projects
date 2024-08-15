const counters = document.querySelectorAll(".counter");

counters.forEach((e) => {
  e.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +e.innerText;
    const dataCeil = e.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);
    e.innerText = currentNum;
    if (currentNum < dataCeil) {
      e.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      e.innerText = dataCeil;
    }
  }
});
