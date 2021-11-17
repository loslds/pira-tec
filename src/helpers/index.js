export async function wait(ms = 2000, data = null) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, ms)
  })
}
