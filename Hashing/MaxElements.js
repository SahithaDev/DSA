let myMap = new Map();
let nums = [1, 2, 2, 3, 1, 4];
for (let i = 0; i < nums.length; i++) {
  myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1);
}
let maxValue = 0;

for (let [key, value] of myMap) {
  if (value > maxValue) {
    maxElement = key;
    maxValue = value;
  }
}
let count = 0;
for (let [key, value] of myMap) {
  if (value === maxValue) {
    count++;
  }
}

console.log(count);
