console.log(a);
console.log("dasdasdas");
console.log("dasdasdas");
console.log("dasdasdas");
console.log("dasdasdas");
console.log("dasdasdas");
var a = "abc";


/* Internally code works as below 
var a; // declaration is hoisted to the top and initialized with undefined
console.log(a); // Output: undefined
a = "abc"; // assignment stays in place  - but as no console.log is there, you will not see the output of abc
*/

// Note: Only declarations are hoisted, not initializations. 
// So, the variable 'a' is hoisted and initialized with undefined, but the assignment of "abc" happens at the original line of code.