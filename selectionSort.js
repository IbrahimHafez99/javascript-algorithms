let a = [1, 3, 4, 2, 5, 20, 15, 14, 13, 25, 22, 21]

function selectionSort(a) {
  let min;
  for (let i = 0; i < a.length; i++) {
    min = i
    for (let j = i + 1; j < a.length; j++) {

      if (a[min] > a[j]) {
        min = j
      }
    }
    [a[i], a[min]] = [a[min], a[i]]
  }
  return a
}

console.log(selectionSort(a));