let arr = [1, 2, 3, 4, 5];
let k = 2;
let n = arr.length;

for (let i = 0; i < n; i++) {
  for (let j = n - k - 1; j < n; j++) {
    console.log(arr[j]);
  }
}
