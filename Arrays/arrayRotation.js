let arr = [1, 2, 3, 4, 5];
let n = arr.length;
for (let count = 1; count <= 3; count++) {
  let temp = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = temp;
}

console.log(arr);
