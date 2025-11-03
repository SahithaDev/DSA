//map
let arr = [1, 2, 3, 4, 5];
function Double(x) {
  return x * 2;
}
const output =
  arr.map(
    Double
  ); /**map is a higher order function , which is a function which also has a function inside it,
it is used to apply on every element of the array ,when we want the transformation of the whole array.*/
console.log(output);

//filter
function isOdd(y) {
  return y % 2;
}
const output1 = arr.filter(isOdd); // filter is used when we want to filter the arrar to obtain required value.
console.log(output1);

//reduce
function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    return sum;
  }
}
const output2 = arr.reduce(function (acc, curr) {
  /**reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
    reduce passes two arguments one function(which includes accumulator and initial value as argument itself) 
    and another initial value of accumulator. curr is the value and acc is just like the sum. */
  acc = acc + curr;
  return acc;
});
console.log(output2);
