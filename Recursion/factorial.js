function product(n) {
  if (n === 0) {
    return 1;
  }
  return n * product(n - 1);
}
console.log(product(5));
