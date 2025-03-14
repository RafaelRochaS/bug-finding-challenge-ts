import assert from "assert"

function sum(a: number, b: number): number {
  return a - b
}

assert.strictEqual(sum(2, 3), 5)
console.log("Passou!")
