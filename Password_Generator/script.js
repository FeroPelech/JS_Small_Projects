const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
};

generateEl.addEventListener("click", () => {
  const length = lengthEl.value;
  const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasSymbol,
    hasNumber,
    length
  );
});

function generatePassword(lower, upper, symbol, number, length) {
  let generatePassword = "";
  const typesCount = lower + upper + symbol + number;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }];
  console.log(typesCount);
  console.log(typesArr);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]+=<>/.,-_~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
