test('23_es2021-1: Logical assignment operators (&&=, ||=, ??=)', () => {
  let a = true
  let b = false
  let c = null

  a &&= 'assigned'
  b ||= 'default'
  c ??= 'fallback'

  expect(a).toBe('assigned')
  expect(b).toBe('default')
  expect(c).toBe('fallback')
})


test('23_es2021-2: Numeric separators improve readability', () => {
  const largeNumber = 1_000_000

  expect(largeNumber).toBe(1000000)
})

test('23_es2021-3: Promise.any returns the first resolved promise', async () => {
  const promises = [
    Promise.reject('Error'),
    Promise.resolve('First resolved'),
    Promise.resolve('Second resolved'),
  ]

  const result = await Promise.any(promises)

  expect(result).toBe('First resolved')
})