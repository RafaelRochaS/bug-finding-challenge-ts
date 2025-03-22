import assert from "assert"

function isAnagram(a: string, b: string): boolean {
  return a.split("").sort().join("") === b.split("").sort().join("")
}

assert.strictEqual(isAnagram("listen", "silent"), true)
assert.strictEqual(isAnagram("hello", "world"), false)
assert.strictEqual(isAnagram("TRETA", "trate"), true)
assert.strictEqual(isAnagram("  pesada  ", "espada"), true)
console.log("Passou!")
