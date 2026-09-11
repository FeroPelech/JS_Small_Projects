const textArea = document.querySelector('textarea')
const count = document.querySelector('.counter')

textArea.addEventListener('input', (e) => {
  newP(e)
})

function newP(e) {
  let value = e.target.value
  let numberOfCharacters = value.replace(/\s/g, '').length
  count.textContent = `Number of letters: ${numberOfCharacters}`
}
