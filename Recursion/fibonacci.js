n = 10;
let result = [];
let prev = 0;
let curr = 1;
for (let i = 2; i < n; i++) {
  result.push(prev);
  let next = prev + curr;
  prev = curr;
  curr = next;
}
console.log(result);
