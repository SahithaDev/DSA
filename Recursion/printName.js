function name(n) {
  if (n === 0) {
    return;
  }
  name(n - 1);
  console.log(n);
  //name(n - 1);
}
name(10);
