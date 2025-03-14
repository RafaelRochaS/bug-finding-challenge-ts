import assert from "assert"

function countVowels(s: string): number {
  return s.match(/[aeiou]/gi)?.length ?? 0
}

assert.strictEqual(countVowels("hello"), 2)
assert.strictEqual(countVowels("xyz"), 0)
console.log("Passou!")
