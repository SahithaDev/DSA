let arr = [2, 3, 1, 6, 4, 5];
let prarr = [];
prarr[0] = 0;
for (let i = 1; i < arr.length; i++) {
  if (i % 2 != 0) {
    prarr[i] = prarr[i - 1] + arr[i];
  } else {
    prarr[i] = prarr[i - 1];
  }
}
console.log(prarr);
