const btn = document.getElementById("calculate");
const tip = document.getElementById("tip");
const bill = document.getElementById("bill");
const result = document.getElementById("total");

btn.addEventListener("click", calculation);

function calculation() {
  const billV = bill.value;
  const tipV = tip.value;
  const totalV = billV * (1 + tipV / 100);

  result.innerText = totalV + "€";
}
