// Solution 1
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
console.log("Math.max(5, n)", Math.max(5, 7));
logAtLeast5(3);

console.log("==================================")

function logAtLeast2(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
console.log("Math.min(5, n)", Math.min(5, 7));
logAtLeast2(3);
  