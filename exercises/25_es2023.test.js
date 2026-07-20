test('25_es2023-1: Array findLast and findLastIndex', () => {
  const array = [1, 2, 3, 4, 5]

  const lastEven = array.findLast(num => num % 2 === 0)
  const lastEvenIndex = array.findLastIndex(num => num % 2 === 0)

  expect(lastEven).toBe(4)
  expect(lastEvenIndex).toBe(3)
})

test('25_es2023-2: Symbol.prototype.description', () => {
  const symbol = Symbol('description')

  expect(symbol.description).toBe('description')
})