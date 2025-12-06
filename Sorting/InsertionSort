function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let p = i - 1;
    while (arr[p] > current && p >= 0) {
      arr[p + 1] = arr[p];
      p--;
    }
    arr[p + 1] = current;
  }
  return arr;
}
console.log(insertionSort([7, 4, 3, 5, 1, 2]));
