export const sleep = (duration: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}