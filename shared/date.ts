export const currentMonth = () => new Date().getMonth() + 1
export const currentDay = () => new Date().getDate()
export const currentYear = () => new Date().getFullYear()

export const currentDoY = () => {
  let day = 0
  for (let i = 0; i < currentMonth(); i++) {
    day += daysInMonths[i]
  }
  day += currentDay()
  return day
}

export const currentHour = () => new Date().getHours()
export const currentMinute = () => new Date().getMinutes()
export const currentSecond = () => new Date().getSeconds()

export const daysInMonths = [
  31,
  // Check if leap year
  currentYear() % 400 === 0 && currentYear() % 4 === 0 && currentYear() % 100 !== 0 ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
]
