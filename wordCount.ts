import assert from "assert"

function wordCount(text: string): number {
  return text.split(" ").length
}

assert.strictEqual(wordCount("hello world"), 2)
assert.strictEqual(wordCount("   spaced  text  "), 2)
console.log("Passou!")
