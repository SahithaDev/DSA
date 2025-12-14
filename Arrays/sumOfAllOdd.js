let sum = 0;
let arr = [1, 4, 2, 5, 3];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let length = j - i + 1;
    if (length % 2 === 1) {
      let subarray = arr.slice(i, j + 1);
      for (let k = 0; k < subarray.length; k++) {
        sum += subarray[k];
      }
    }
  }
}
console.log(sum);
