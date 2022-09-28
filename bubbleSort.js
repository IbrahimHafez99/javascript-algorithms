const a = [10, 5, 25, 20, 35, 30, 40, 36]
const sortedArr = (function bubbleSort(a) {
  for (let i = a.length; i > 0; i--) {
    let didSwap = true
    for (let j = 0; j < i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        didSwap = false
      }
    }
    if (didSwap) {
      break
    }
  }
  return a
})(a)

console.log(sortedArr);