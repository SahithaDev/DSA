let myMap = new Map();
let nums = [1, 2, 2, 3, 1, 4];
for (let i = 0; i < nums.length; i++) {
  myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1);
}
let maxValue = 0;
for (let value of myMap.values()) {
  if (value > maxValue) {
    maxValue = value;
  }
}
console.log(maxValue);
