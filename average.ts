import assert from "assert"

function average(numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length
}

assert.strictEqual(average([2, 4, 6]), 4)
console.log("Passou!")
