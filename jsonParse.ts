import assert from "assert"

function parseJSON(json: string): object {
  return JSON.parse(json)
}

assert.deepStrictEqual(parseJSON('{"a": 1}'), { a: 1 })
console.log("Passou!")
