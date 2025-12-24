function name(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  name(n - 1);
}
name(10);
