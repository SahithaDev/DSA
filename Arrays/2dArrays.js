let arr = [2, 8, 3, 9, 15];
let B = [
  [1, 4],
  [0, 2],
  [2, 3],
];
let pf = [];
pf[0] = 0;
for (let i = 1; i < arr.length; i++) {
  if (i % 2 == 0) {
    pf[i] = pf[i - 1];
  } else {
    pf[i] = pf[i - 1] + arr[i];
  }
}
let out = [];
let sum = 0;
for (let i = 0; i < B.length; i++) {
  let L = B[i][0];
  let R = B[i][1];
  if (L == 0) {
    sum = pf[R];
  } else {
    sum = pf[R] - pf[L - 1];
  }
  out.push(sum);
}
console.log(out);
