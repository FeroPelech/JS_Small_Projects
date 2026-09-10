const textArea = document.querySelector('textarea')
const count = document.querySelector('.counter')

textArea.addEventListener('input', (e) => {
  newP(e)
})

function newP(e) {
  console.log(e)
}
