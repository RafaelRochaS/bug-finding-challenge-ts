import assert from "assert"

function removeDuplicates(arr: number[]): number[] {
  return Array.from(new Set(arr))
}

const nums = [1, 2, 2, 3]
assert.deepStrictEqual(removeDuplicates(nums), [1, 2, 3])
console.log("Passou!")
