// Els tests ja funcionen correctament utilitzant promeses amb `.then()` i `.catch()`.

// Refactoritza'ls utilitzant `async/await` mantenint exactament el mateix comportament i fent que els tests continuïn passant.

const doAsync = (rejectPromise = false) =>  new Promise((resolve, reject) => setTimeout(() => {
      if (rejectPromise) {
        reject('rejected')
      } else {
        resolve('resolved')
      }
    })
  )

  test('15_async-await-1: should work with resolved promises', async () => {
  const result = await doAsync()
  expect(result).toBe('resolved')
})

test('15_async-await-2: should throw an error with a rejected promise', async () => {
  try {
    await doAsync(true)
  } catch (error) {
    expect(error).toBe('rejected')
  }
})


