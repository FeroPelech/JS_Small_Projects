function showMessageContent(message) {
  const messageContent = document.querySelector('.message-content')
  messageContent.textContent = `"${message}" - Your Message is Delivered`
}

function showInvalidMessage() {
  const invalidMessage = document.querySelector('.invalid-message')
  invalidMessage.computedStyleMap.display = 'block'
  setTimeout(() => {
    invalidMessage.style.display = 'none'
  }, 2000)
}
