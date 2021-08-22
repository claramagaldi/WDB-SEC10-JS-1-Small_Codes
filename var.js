var x = 1;

if (x === 1) {
  var x = 2; // declaring again

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2

////////////////////////////////////////////////////////////////////////

var y = 1;

if (y === 1) {
  y = 2; // modifying

  console.log(y);
  // expected output: 2
}

console.log(y);
// expected output: 2
