export function randomAnswer(array: any[]) {
  const newArr = [...array].sort(() => Math.random() - 0.5)
  return newArr
}
