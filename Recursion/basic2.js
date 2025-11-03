function sumNoInArray(arr) {
  n = arr.length;
  if (n < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(sumNoInArray(arr));
