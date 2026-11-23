// const { use } = require('react')

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordCheck = document.getElementById('passwordCheck')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordCheckValue = passwordCheck.value.trim()

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be empty')
  } else {
    setSuccessFor(username)
  }
}

function setErrorFor(input, message) {
  const controlForm = input.parentElement
  const small = controlForm.querySelector('.error')
  controlForm.className = 'control-form.fail'
  small.innerText = message
}

function setSuccessFor(input) {
  const controlForm = input.parentElement
  controlForm.className = 'control-form success'
}
