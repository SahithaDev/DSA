function checkPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
let s = "abacab";
let ans = 0;
let n = s.length;
for (let left = 0; left < n; left++) {
  for (let right = left; right < n; right++) {
    if (checkPalindrome(s, left, right) === true) {
      ans = Math.max(ans, right - left + 1);
    }
  }
}
console.log(ans);
