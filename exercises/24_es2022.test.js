test('24_es2022-1: Class fields and private methods', () => {
  class Person {
    static publicField = 'public'
    #secret = 'secret'

    #getPrivateSecret() {
      return this.#secret
    }

    getSecret() {
      return this.#getPrivateSecret()
    }
  }

  const person = new Person()
  expect(person.getSecret()).toBe('secret')
  expect(Person.publicField).toBe('public')
})

test('24_es2022-2: at() method for indexing arrays and strings', () => {
  const array = [1, 2, 3, 4]
  const string = 'hello'

  const lastArrayElement = array.at(-1)
  const secondLastStringChar = string.at(-2)

  expect(lastArrayElement).toBe(4)
  expect(secondLastStringChar).toBe('l')
})