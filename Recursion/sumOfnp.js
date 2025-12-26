let para = function (i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  para(i - 1, sum + i);
};
para(3, 0);
