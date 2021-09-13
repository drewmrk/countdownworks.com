const clock = (
  tense: string,
  countdownDoY: number,
  currentDoY: number,
  hours: number,
  minutes: number,
  seconds: number
) => {
  const dayDiff = Math.abs(countdownDoY - currentDoY)
  return [
    `${dayDiff !== 0 ? `${dayDiff} day${dayDiff === 1 ? '' : 's'}` : ''}`,
    `${tense === 'until' ? 23 - hours : hours} hours`,
    `${tense === 'until' ? 59 - minutes : minutes} minutes`,
    `${tense === 'until' ? 59 - seconds : seconds} seconds`
  ]
}

export default clock
