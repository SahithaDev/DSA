let arr = [1, 1, 2];
let i = 0;
for (let j = 1; j < arr.length; ) {
  if (arr[j] === arr[i]) {
    arr.splice(j, 1);
  } else {
    i += 1;
  }
}
console.log(arr);
console.log(arr.length);
