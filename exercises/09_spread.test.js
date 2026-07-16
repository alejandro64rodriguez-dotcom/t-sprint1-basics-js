test('09_spread-1: should be able to call a function and spread the arguments', () => {
  // Utilitza l'operador spread per passar arguments a una funció
  const args = ['a', 'b', 'c']
  let calls = 0

  const myFunction = (a, b, c) => {
    expect(a).toBe('a')
    expect(b).toBe('b')
    expect(c).toBe('c')
    calls++
  }
    myFunction(...args)
  expect(calls).toBe(1)

})

test('09_spread-2: should be easier to concatenate arrays', () => {
  // Crea un segon array amb els valors `[4, 5, 6]` i utilitza l'operador spread (`...`) per concatenar-lo amb `array1`.
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6]
  const result = [...array1, ...array2]
  
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test('09_spread-3: should be able to merge properties from objects', () => {
  // Crea un nou objecte `result` utilitzant l'operador spread (`...`) per copiar les propietats de `obj1` i afegir la propietat que es mostra al test.
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }
  const result = {
    ...obj1,
    eggs: 'spam',
  }
  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })



 
})