const switchBtn = document.querySelector('.btn')
console.log(switchBtn)
const label = document.querySelector('.inputLabel')
console.log(label)
const input = document.getElementById('inputW')
console.log(input)
const resultBtn = document.querySelector('.resultBtn')
console.log(resultBtn)
const result = document.querySelector('.resultInfo')
console.log(result)
let checkSwitchBtn = 'kg'

switchBtn.addEventListener('click', () => {
  if (checkSwitchBtn === 'kg') {
    switchBtn.textContent = 'Switch Lb. to Kg.'
    label.textContent = 'Pounds'
    checkSwitchBtn = 'lb'
    /**/
  } else {
    switchBtn.textContent = 'Switch Kg. to Lb.'
    label.textContent = 'Kilograms'
    checkSwitchBtn = 'kg'
  }
})

resultBtn.addEventListener('click', () => {
  const weight = Number(input.value)
  if (checkSwitchBtn == 'kg') {
    const pounds = (weight * 2.20462).toFixed(2)
    result.textContent = `Weight in Pounds: ` + pounds + ` lb`
  } else {
    const kilograms = (weight / 2.20462).toFixed(2)
  }
})
