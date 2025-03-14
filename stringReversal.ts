import assert from "assert"

function reverseString(s: string): string {
  return s.split("").reverse().join()
}

assert.strictEqual(reverseString("abc"), "cba")
console.log("Passou!")
