let arr = [2, 7, 11, 15];
let target = 18;
let myMap = new Map();
for (let i = 0; i < arr.length; i++) {
  myMap.set(arr[i], i);
}
for (let [key, value] of myMap) {
  let diff = target - key;
  if (myMap.has(diff)) {
    console.log([myMap.get(key), myMap.get(diff)]);
    break;
  }
}
