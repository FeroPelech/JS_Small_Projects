const btn = document.querySelector("button");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  const cost = document.querySelector("input");
  let tip = (cost.value * 0.15).toFixed(2);
  output.innerHTML = `<h1>You should tip $${tip} on $${cost.value} </h1>`;
});
