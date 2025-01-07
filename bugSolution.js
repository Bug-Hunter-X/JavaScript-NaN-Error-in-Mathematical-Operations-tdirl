function foo(a = 0, b = 0) {
  return a + b;
}

function bar(a = 0, b = 0) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 6
console.log(bar(undefined, 3)); // Output: 6