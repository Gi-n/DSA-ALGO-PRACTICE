// suppose we want to write a function that calculates the sum of all numbers from 1 upto N;

// Solution-1
// performance low
function addUptoN(n) {
  total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log("solution1",addUptoN(2));
console.log("solution1",addUptoN(3));
console.log("solution1",addUptoN(6));

console.log("========================**====================")

// Solution-2
// performance increase
function addUptoN2(n){
    return (n * (n + 1)) / 2;
}

console.log("solution2",addUptoN(2));
console.log("solution2",addUptoN(3));
console.log("solution2",addUptoN(6));

// to overcome this issue with execution time we come up with problem with time