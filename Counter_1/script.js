const display = document.querySelector('.display')
let value = Number(display.textContent)
console.log(value)

const decreaseBtn = document.querySelector('.minus')
const increaseBtn = document.querySelector('.plus')
console.log(decreaseBtn)

function checkValue(value) {
  if (value <= -16) {
    display.style.boxShadow = '0 0 25px rgba(225, 2, 250, 0.3)'
  } else if (value <= -12) {
    display.style.boxShadow = '0 0 25px rgba(225, 2, 250, 0.4)'
  } else if (value <= -8) {
    display.style.boxShadow = '0 0 25px rgba(225, 2, 250, 0.5)'
  } else if (value <= -4) {
    display.style.boxShadow = '0 0 25px rgba(225, 2, 250, 0.6)'
  } else if (value < 0) {
    display.style.boxShadow = '0 0 25px rgba(225, 2, 250, 0.7)'
  } else if (value === 0) {
    display.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.6)'
  } else if (value < 4) {
    display.style.boxShadow = '0 0 25px rgba(2, 250, 246, 0.7)'
  } else if (value < 8) {
    display.style.boxShadow = '0 0 25px rgba(2, 250, 246, 0.6)'
  } else if (value < 12) {
    display.style.boxShadow = '0 0 25px rgba(2, 250, 246, 0.5)'
  } else if (value < 16) {
    display.style.boxShadow = '0 0 25px rgba(2, 250, 246, 0.4)'
  } else {
    display.style.boxShadow = '0 0 25px rgba(2, 250, 246, 0.3)'
  }
}
