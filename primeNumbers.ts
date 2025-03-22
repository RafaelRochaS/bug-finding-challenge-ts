import assert from "assert"

function isPrime(n: number): boolean {
  if (n < 2) return false

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

const initialTime = Date.now()

assert.strictEqual(isPrime(7), true)
assert.strictEqual(isPrime(8), false)
assert.strictEqual(isPrime(13), true)
assert.strictEqual(isPrime(24), false)
assert.strictEqual(isPrime(563), true)
assert.strictEqual(isPrime(564), false)
assert.strictEqual(isPrime(564), false)
assert.strictEqual(isPrime(1000000007), true)
assert.strictEqual(isPrime(1000000008), false)

const finalTime = Date.now()
assert(finalTime - initialTime <= 1000)

console.log("Passou!")