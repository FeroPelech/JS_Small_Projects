const actualDay = document.querySelector('.day')
const funInfo = document.querySelector('.funInfo')
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const date = new Date()
const day = date.getDay()
console.log(days[day])

actualDay.textContent = days[day]

if (day == 0) {
  funInfo.textContent = `It's God day. \n Rest and charge some power for next days.`
} else if (day == 1) {
  funInfo.textContent = '...be strong!'
} else if (day == 2) {
  funInfo.textContent = 'Nothing Special.'
} else if (day == 3) {
  funInfo.textContent = 'The week is halfway over.'
} else if (day == 4) {
  funInfo.textContent = 'Krížom krážom s Jožom Rážom.'
} else if (day == 5) {
  funInfo.textContent = `It's friday day.`
}
