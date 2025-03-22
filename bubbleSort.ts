import assert from "assert"

function bubbleSort(arr: number[]): number[] {
  let swapped = false

  do {
    swapped = false

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true;
      }
    }

  } while (swapped)

  return arr
}

assert.deepStrictEqual(bubbleSort([4, 3, 2, 1]), [1, 2, 3, 4])
assert.deepStrictEqual(bubbleSort([9, 15, 4, 8, 9, 1, 12, 0, 35, 6]), [0, 1, 4, 6, 8, 9, 9, 12, 15, 35])
console.log("Passou!")
