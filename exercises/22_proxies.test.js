// this is the object we'll be mucking around with and proxying
const getCharacter = () => {
  return {
    _id: '9RKDLS02580GHCXNZLA0',
    password: 'isolemnlysweariamuptonogood',
    name: {first: 'Ron', last: 'Weasly'},
    classes: [
      {name: 'Divination', teacher: 'Sybill Trelawney'},
      {name: 'Defence Against the Dark Arts', teacher: 'Dolores Umbridge'},
    ],
    greet(greeting = 'Hi') {
      const {first, last} = this.name
      return `${greeting}! My name is ${first} ${last} and my ID is ${this._id} and my password is ${this.password}!`
    },
    getTeachers() {
      return this.classes.map(({teacher}) => teacher)
    },
  }
}

test('22_proxies-1: can wrap an existing object', () => {
  const character = getCharacter()
  const proxy = new Proxy(character, {})
  expect(proxy).not.toBe(character) // referencialment diferent
  expect(proxy).toEqual(character) // profundament igual
})


test('22_proxies-2: handler can intercept gets, sets, and deletes', () => {
  const character = getCharacter()

  const handler = {
    deleteProperty(target, prop) {
      if (prop === '_id') {
        // no l'eliminem realment, però "mentim" dient que ha anat bé
        return true
      }
      delete target[prop]
      return true
    },
  }
  const proxy = new Proxy(character, handler)

  proxy['classes.1.teacher'] = 'Severus Snape'
  proxy.awesome = 10
  delete proxy._id

  expect(proxy['classes.1.teacher']).toBe('Severus Snape')
  expect(proxy.awesome).toBe(10)
  expect(proxy._id).toEqual('9RKDLS02580GHCXNZLA0')

  delete proxy.awesome
  expect(proxy.awesome).toBe(undefined)
})
//////// EXTRA CREDIT ////////
test('22_proxies-3: can intercept function calls', () => {
  const character = getCharacter()

  const handler = {
    apply(target, thisArg, args) {
      const result = Reflect.apply(target, thisArg, args)
      if (typeof result === 'string') {
        return result
          .replace(thisArg.password, '[REDACTED]')
          .replace(thisArg._id, '[REDACTED]')
      }
      return result
    },
  }
  character.greet = new Proxy(character.greet, handler)
  character.getTeachers = new Proxy(character.getTeachers, {})
  const result = character.greet('Hey there')
  expect(result).not.toContain(character.password)
  expect(result).not.toContain(character._id)
  expect(character.getTeachers()).toEqual([
    'Sybill Trelawney',
    'Dolores Umbridge',
  ])
})

test('22_proxies-4: can be used to do some fancy stuff with arrays', () => {
  const characters = [
    'Harry Potter', 'Ron Weasly', 'Hermione Granger',
    'Nevel Longbottom', 'Lavender Brown', 'Scabbers', 'Pigwidgeon',
  ]

  const handler = {
    get(target, prop) {
      const index = Number(prop)
      if (!Number.isNaN(index) && index < 0) {
        return target[target.length + index]
      }
      return target[prop]
    },
  }
  const proxy = new Proxy(characters, handler)
  expect(proxy[0]).toBe('Harry Potter')
  expect(proxy[-1]).toBe('Pigwidgeon')
  expect(proxy[-4]).toBe('Nevel Longbottom')
})