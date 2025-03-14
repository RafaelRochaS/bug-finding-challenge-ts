import assert from "assert"

function bubbleSort(arr: number[]): number[] {
  let swapped = false

  do {
    swapped = false

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true;
      }
    }

  } while (swapped)

  return arr
}

assert.deepStrictEqual(bubbleSort([3, 2, 1]), [1, 2, 3])
console.log("Passou!")
