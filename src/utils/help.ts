export function randomNum(min: number, max: number) {
  return (Math.random() * (max - min + 1) + min).toFixed(2)
}
