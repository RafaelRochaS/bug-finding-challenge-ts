import assert from "assert"

interface TestObject {
  a: number
  b: number
  c: string
  d: boolean
}

class ObjectMisformedError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ObjectMisformedError"
  }
}

function parseJSON(json: string): TestObject {
  return JSON.parse(json)
}

assert.deepStrictEqual(parseJSON('{"a": 1, "b": 2, "c": "3", "d": true}'), { a: 1, b: 2, c: "3", d: true  })
assert.throws(() => parseJSON('{"a": 1}'), typeof ObjectMisformedError)
console.log("Passou!")
