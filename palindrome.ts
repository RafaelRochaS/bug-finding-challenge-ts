import assert from "assert"

function isPalindrome(s: string): boolean {
  return s === s.split("").reverse().toString()
}

assert.strictEqual(isPalindrome("racecar"), true)
assert.strictEqual(isPalindrome("hello"), false)
console.log("Passou!")
