//BinarySearch with helper function
//Used the helper function to make a good level of abstraction for the binary search function

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const x = 2
function binarySearch(a, x) {
  let left = 0, right = a.length - 1
  return (function helperBinarySearch(left, right) {
    if (left > right) {
      return false
    }
    let midIndex = Math.floor(left + ((right - left) / 2))
    let value = a[midIndex]
    if (value === x) {
      return value
    }
    if (x > value) {
      return helperBinarySearch(midIndex + 1, right)
    }
    else if (x < a[midIndex]) {
      return helperBinarySearch(left, midIndex)
    }
  })(left, right)
}

console.log(binarySearch(a, x)); 