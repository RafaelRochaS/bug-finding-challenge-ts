import assert from "assert"

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

assert.strictEqual(fibonacci(5), 5)
console.log("Passou!")
