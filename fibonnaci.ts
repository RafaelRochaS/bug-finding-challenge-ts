import assert from "assert"

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacciDivideAndConquer(n: number): number {
  return n
}


const initialTime = Date.now()

assert.strictEqual(fibonacci(5), 5)
assert.strictEqual(fibonacci(13), 233)
assert.strictEqual(fibonacci(17), 1597)
assert.strictEqual(fibonacci(50), 12586269025)

const finalTime = Date.now()
assert(finalTime - initialTime <= 1000)

console.log("Passou!")
