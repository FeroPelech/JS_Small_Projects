const firstValue = document.querySelector('.firstValue')
const secondValue = document.querySelector('.secondValue')
const text = document.querySelector('.result')
const btn = document.querySelector('.btn')

function randomNumber(first, second) {
  return Math.floor(Math.random() * (second - first + 1)) + first
}

btn.addEventListener('click', () => {
  const firstValueNumber = Number(firstValue.value)
  const secondValueNumber = Number(secondValue.value)
  const result = randomNumber(firstValueNumber, secondValueNumber)
})
