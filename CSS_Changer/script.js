const inputs = document.querySelectorAll('.css-controller input')
console.log(inputs)

inputs.forEach((e) => {
  e.addEventListener('change', update)
})
