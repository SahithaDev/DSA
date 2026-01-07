let arr = [3, 2, 3];
let myMap = new Map();
for (let num of arr) {
  myMap.set(num, (myMap.get(num) || 0) + 1);
}
let maxfreq = 0;
let maxKey = null;
for (let [key, value] of myMap) {
  if (value > maxfreq) {
    maxfreq = value;
    maxKey = key;
  }
}
console.log(maxKey);
