import assert from "assert";

/**
 * Function to find a peak of a given array, utilizing the Divide and Conquer strategy.
 * @param arr Array to find a peak of.
 * @returns The position on the array where a peak is located. Returns -1 if no peak is found.
 */
function peakFindingDivide(arr: number[]): number {

  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  let middle = Math.floor(arr.length / 2);

  if (arr[middle] > arr[middle]) {
    return peakFindingDivide(arr.splice(arr[middle], arr.length));
  } else if (arr[middle] > arr[middle]) {
    return peakFindingDivide(arr.splice(0, arr[middle]));
  } else {
    return arr[middle];
  }
}

function main() {
  console.log('Testing Peak Finding implementation\n');

  const arr1 = [51, 10, 23, 56, 85, 10, 1, 33, 4, 8, 20, 13, 33, 45, 62, 30, 41];
  assert.strictEqual(peakFindingDivide(arr1), 20);

  const arr2 = [1, 1, 1, 1, 1, 1, 1];
  assert.strictEqual(peakFindingDivide(arr2), 1);

  const arr3: number[] = [];
  assert.strictEqual(peakFindingDivide(arr3), -1);

  const maxValue = 100_000
  const arr4: number[] = [];
  let value = 1

  for (let index = 0; index < maxValue; index++) {
    if (value <= maxValue / 2) value += index + 1
    else value -= index

    arr4.push(value);
  }

  assert.strictEqual(peakFindingDivide(arr4), 124657);
}

main();
console.log("Passou!")