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
    console.log('kuk')
  }
}
