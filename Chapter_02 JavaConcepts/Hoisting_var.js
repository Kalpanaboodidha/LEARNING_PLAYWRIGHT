console.log(greeting);   // Output: undefined
var greeting = "Hello!";
console.log(greeting);   // Output: "Hello!"

// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"