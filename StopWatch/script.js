window.onload = () => {
  let seconds = 0
  let miliseconds = 0
  let interval
  const addSeconds = document.querySelector('seconds')
  const addMilliSeconds = document.querySelector('milli')
  const startBtn = document.querySelector('.start')
  const stopBtn = document.querySelector('.stop')
  const resetBtn = document.querySelector('.reset')

  startBtn.onclick = () => {
    clearInterval(interval)
    interval = setInterval(start, 10)
  }

  function start() {
    miliseconds++
    if (miliseconds < 10) {
      addMilliSeconds.innerHTML = '0' + miliseconds
    } else {
      addMilliSeconds.innerHTML = miliseconds
    }

    if (miliseconds > 99) {
      seconds++
      addSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds
      miliseconds = 0
    }
  }
}
