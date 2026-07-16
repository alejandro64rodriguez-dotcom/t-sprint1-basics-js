import * as Mathy from '../common/Mathy'
import * as IndexImport from '../common'
// WRITE YOUR IMPORT STATEMENTS HERE
import _ from 'lodash'
import { add } from '../common/Mathy'
import lodash from 'lodash'
import { sqrt as mySqrt, square as mySquare } from '../common/Mathy'

test('can import Mathy', () => {
  // this one's already done! You're welcome :)
  expect(Mathy.sqrt).toBeDefined()
  expect(Mathy.square).toBeDefined()
  expect(Mathy.diag).toBeDefined()
})

test('06_modules-1: can specify what to import, to only retain pieces of the import', () => {
  // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
  expect(mySqrt).toBeDefined()
  expect(mySquare).toBeDefined()
  expect(mySqrt).toBe(Mathy.sqrt)
  expect(mySquare).toBe(Mathy.square)
})

test('06_modules-2: can import from my node_modules', () => {
  // import `lodash`
  expect(_).toBeDefined()
})

test('06_modules-3: can import Mathy', () => {
  // El mòdul Mathy està importat amb `import * as Mathy`, el que significa que totes les seves funcions es troben dins de l'objecte `Mathy`.
  // Per això podem accedir a la funció amb `Mathy.add`, i comprovar que el test ja passa.
  expect(Mathy.add(1, 2)).toBe(3)
})

test('06_modules-4: can specify what to import, to only retain pieces of the import', () => {
  // El mòdul Mathy ja està importat amb `import * as Mathy`.
  // Ara importa també la funció `add` utilitzant named imports per poder utilitzar-la directament sense accedir a `Mathy`.
  expect(add(1, 2)).toBe(3)
})

test('06_modules-5: can import from my node_modules', () => {
  // Importa un mòdul des de node_modules i comprova que funciona
  expect(lodash.isEmpty([])).toBe(true)
})

//////// EXTRA CREDIT ////////
test('Index import', () => {
  //I have noticed that using index.js is pretty common pattern
  //If someone has been confused about that maybe this helps
  expect(IndexImport.variable1).toBe('Bob')
  expect(IndexImport.variable2).toBe('Kent')
  expect(IndexImport.variable3).toBe(222)
  expect(IndexImport.variable4).toBe(false)
})
