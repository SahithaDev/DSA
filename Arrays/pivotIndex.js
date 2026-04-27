let nums = [1, 7, 3, 4, 5, 6];
let leftsum = 0;
let prefix = new Array(nums.length);
prefix[0] = nums[0];
for (let i = 1; i < nums.length; i++) {
  prefix[i] = prefix[i - 1] + nums[i];
}
let totalsum = prefix[prefix.length - 1];
for (let i = 0; i < prefix.length; i++) {
  let rightsum = totalsum - leftsum - nums[i];

  if (rightsum === leftsum) {
    console.log("pivot is", i);
    break;
  }
  leftsum = leftsum + nums[i];
}
