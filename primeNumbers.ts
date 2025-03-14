import assert from "assert"

function isPrime(n: number): boolean {
  if (n < 2) return false

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

assert.strictEqual(isPrime(7), true)
assert.strictEqual(isPrime(8), false)
console.log("Passou!")