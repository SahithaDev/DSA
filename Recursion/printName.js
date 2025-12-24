let count = 0;
function name() {
  if (count === 5) {
    return;
  }
  count++;
  console.log("Sahitha");
  name();
}
name();
