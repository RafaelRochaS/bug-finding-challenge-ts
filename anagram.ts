import assert from "assert"

function isAnagram(a: string, b: string): boolean {
  return a.split("").sort().join("") === b.split("").sort().join("")
}

assert.strictEqual(isAnagram("listen", "silent"), true)
assert.strictEqual(isAnagram("hello", "world"), false)
console.log("Passou!")
