function selectionSort(arr) {
  n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
let arr = [7, 1, 5, 3, 2];
console.log(selectionSort(arr));
