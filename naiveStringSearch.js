const str1 = 'darknessdarknessonddarknessdarknessdarknessdarknessdarkness'
const str2 = 'darkness'

function naiveSearch(str1, str2) {
  let result = 0
  for (let i = 0; i < str1.length; i++) {
    let j = 0
    for (j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j])
        break
    }
    (j === str2.length) && result++
  }
  return result
}

console.log(naiveSearch(str1, str2));