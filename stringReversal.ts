import assert from "assert"

function reverseString(s: string): string {
  return s.split("").reverse().join()
}

assert.strictEqual(reverseString("abc"), "cba")
assert.strictEqual(reverseString("123456"), "654321")
console.log("Passou!")
