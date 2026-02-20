JavaScript Complete Tutorial

Beginner to Advanced
🟢 SECTION 1: IDENTIFIERS IN JAVASCRIPT
What is an Identifier?
An identifier is a name used to identify a variable, function, class, or any other user-defined item in JavaScript. Think of identifiers as labels or names you give to things in your code so you can refer to them later.

Rules for Identifiers
Rule 1: Must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($). Cannot start with a number.
Rule 2: After the first character, can contain letters, digits (0-9), underscores, or dollar signs.
Rule 3: Identifiers are case-sensitive. myVar and myvar are two different identifiers.
Rule 4: Reserved words (if, else, for, while, function, return, class, etc.) cannot be used as identifiers.
Rule 5: No spaces or special characters (like @, #, !, %) are allowed.
Rule 6: Unicode characters are allowed but English is best practice.
Rule 7: No maximum length limit, but keep names readable and meaningful.
Valid vs Invalid Identifiers
Valid ✅	Invalid ❌	Reason
myVariable	2ndPlace	Cannot start with digit
_privateVar	my-variable	Hyphen not allowed
$price	my variable	Spaces not allowed
firstName	class	Reserved keyword
camelCaseExample	user@name	@ not allowed
_count123	for	Reserved keyword
Example 1: Variable Identifiers
let userName = "Dev";           // camelCase variable
let _secretKey = "abc123";      // starts with underscore
let $price = 49.99;             // starts with dollar sign
let itemCount = 10;             // descriptive name
let MAX_RETRIES = 3;            // UPPER_SNAKE for constants
Example 2: Function Identifiers
function calculateTotal(price, tax) { return price + tax; }
function _helperFunction() { /* internal use */ }
function $getElement(id) { return document.getElementById(id); }
const isUserLoggedIn = () => true;
function validateEmailAddress(email) { /* ... */ }
Example 3: Class Identifiers (PascalCase)
class UserProfile { }         // PascalCase for classes
class ShoppingCart { }
class APIHandler { }
class DatabaseConnection { }
class TestRunner { }          // QA-related class
Example 4: Case Sensitivity
let myVar = 10;
let MyVar = 20;
let MYVAR = 30;
console.log(myVar);  // 10
console.log(MyVar);  // 20 — different from myVar
console.log(MYVAR);  // 30 — different from both
Example 5: QA Testing Naming
let testCaseName = "Login Validation";
let expectedResult = "Success";
let actualResult = getLoginStatus();
let isTestPassed = (expectedResult === actualResult);
let bugSeverity = "Critical";
QA Examples — Identifiers
🔹 Q: A tester names a variable 1stTestCase. Will this work? 💡 A: No! Identifiers cannot start with a digit. Use firstTestCase or _1stTestCase instead.

🔹 Q: Can you use return as a variable name? 💡 A: No. return is a reserved keyword in JavaScript and cannot be used as an identifier.

🔹 Q: Is testResult the same as TestResult? 💡 A: No. JavaScript is case-sensitive, so testResult and TestResult are two completely different identifiers.

🔹 Q: In automation, why do we use camelCase for variables? 💡 A: camelCase (like loginPageTitle) is a JS convention that improves readability. It is not enforced by the language but is a widely followed best practice.

🔹 Q: What happens if you use @ in an identifier? 💡 A: JavaScript will throw a SyntaxError. Only letters, digits, underscore (_), and dollar sign ($) are allowed.

🟢 SECTION 2: LITERALS IN JAVASCRIPT

What is a Literal?

A literal is a fixed value written directly in your code. Unlike variables (names pointing to values), literals ARE the values themselves. When you write 42, that is a numeric literal. When you write "hello", that is a string literal.

Types of Literals
Literal Type	Example	Description
Numeric (Integer)	42, 0xFF, 0b1010, 0o77	Whole numbers in decimal, hex, binary, octal
Numeric (Float)	3.14, 2.5e10, .5	Decimal numbers, scientific notation
String	"hello", 'world', `template`	Text in single, double, or backtick quotes
Boolean	true, false	Only two values
Null	null	Intentional absence of value
Undefined	undefined	Declared but not assigned
BigInt	9007199254740991n	Very large integers with n suffix
Object	{ name: "Dev", age: 25 }	Key-value pairs in curly braces
Array	[1, 2, 3, 4, 5]	Ordered list in square brackets
RegExp	/^[a-z]+$/i	Regular expression pattern
Template	`Hello ${name}`	String with embedded expressions
Rules for Literals
Rule 1: String literals must be enclosed in matching quotes. Mixing causes SyntaxError.
Rule 2: No leading zeros in strict mode. Use 0o for octal.
Rule 3: Boolean literals are only true and false (lowercase).
Rule 4: null represents "no value". Not the same as undefined, 0, or "".
Rule 5: Template literals (backticks) can span multiple lines and embed ${expression}.
Rule 6: BigInt must end with n and cannot have decimal points.
Rule 7: Object literal keys can be strings, numbers, or computed [expr].
Example 1: Numeric Literals
let decimal = 42;           // Decimal (base 10)
let hex = 0xFF;             // Hexadecimal = 255
let binary = 0b11010;       // Binary = 26
let octal = 0o77;           // Octal = 63
let float = 3.14159;        // Floating point
let scientific = 2.5e6;     // 2,500,000
let negative = -100;        // Negative number
Example 2: String Literals
let single = 'Hello World';
let double = "Hello World";
let template = `Hello ${userName}`;   // Template literal
let escaped = "She said \"Hi\"";      // Escaped quotes
let multiLine = `Line 1
Line 2
Line 3`;                              // Multi-line string
Example 3: Boolean Literals
let isLoggedIn = true;
let hasPermission = false;
let isTestPassed = (actual === expected);  // evaluates to boolean
let isEmpty = !arrayData.length;           // coerced to boolean
let isAdmin = user.role === "admin";
Example 4: Object and Array Literals
let testCase = {
    id: "TC001",
    name: "Login Test",
    priority: "High",
    status: "Pass"
};

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
let matrix = [[1, 2], [3, 4], [5, 6]];   // Nested array
Example 5: Special Literals (null, undefined, BigInt, RegExp)
let result = null;                     // Intentionally empty
let notAssigned;                        // undefined by default
let bigNumber = 900719925474099123n;    // BigInt literal
let emailRegex = /^[\w.]+@[\w.]+$/;    // RegExp literal
QA Examples — Literals
🔹 Q: Difference between null and undefined? 💡 A: null means "intentionally no value" (you set it). undefined means "not yet assigned" (JS sets it). typeof null is "object" (historical bug), typeof undefined is "undefined".

🔹 Q: Can a string use mismatched quotes? 💡 A: No. Must start and end with same quote type. Mismatching causes SyntaxError.

🔹 Q: Difference between 0, false, null, undefined, and ""? 💡 A: All are falsy. 0=number, false=boolean, null=intentional empty, undefined=not assigned, ""=empty string. Different types, all evaluate to false.

🔹 Q: When to use template literals in QA? 💡 A: Dynamic messages: `Test ${testName} ${status === 'pass' ? 'PASSED' : 'FAILED'} in ${duration}ms`

🔹 Q: Why does typeof null return "object"? 💡 A: Bug from 1995, never fixed for compatibility. Check null with === null.

🟢 SECTION 3: OPERATORS IN JAVASCRIPT

What is an Operator?
An operator is a symbol that tells JavaScript to perform a specific mathematical, relational, logical, or assignment operation on operands to produce a result.

Types of Operators
Type	Symbols	Purpose
Arithmetic	+ , - , * , / , % , ** , ++ , --	Math calculations
Assignment	= , += , -= , *= , /= , %= , **=	Assign values
Comparison	== , === , != , !== , > , < , >= , <=	Compare values
Logical	&& , || , !	Combine/invert booleans
Bitwise	& , | , ^ , ~ , << , >> , >>>	Bit-level operations
String	+ , +=	Concatenate strings
Ternary	condition ? a : b	Short if-else
typeof	typeof x	Returns type as string
instanceof	obj instanceof Class	Check class membership
Spread	...array	Expand elements
Nullish Coalescing	??	Right side if left is null/undefined
Optional Chaining	?.	Safe property access
Example 1: Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);    // 13   (Addition)
console.log(a - b);    // 7    (Subtraction)
console.log(a * b);    // 30   (Multiplication)
console.log(a / b);    // 3.33 (Division)
console.log(a % b);    // 1    (Modulus/remainder)
console.log(a ** b);   // 1000 (Exponentiation 10^3)
console.log(++a);      // 11   (Pre-increment)
Example 2: Comparison Operators (== vs ===)
console.log(5 == "5");     // true  (loose: type coercion)
console.log(5 === "5");    // false (strict: no coercion)
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(0 == false);          // true
console.log(0 === false);         // false
console.log(NaN === NaN);         // false (NaN never equals anything)
Example 3: Logical Operators
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin);   // false (AND)
console.log(isLoggedIn || isAdmin);   // true  (OR)
console.log(!isAdmin);                // true  (NOT)
let name = userName || "Guest";       // "Guest" if falsy
let config = settings ?? defaults;    // defaults if null/undefined
Example 4: Assignment Operators
let x = 10;
x += 5;    // x = 15
x -= 3;    // x = 12
x *= 2;    // x = 24
x /= 4;    // x = 6
x %= 4;    // x = 2
x **= 3;   // x = 8
Example 5: Ternary, typeof, Spread, Optional Chaining, Nullish
// Ternary
let status = (score >= 60) ? "Pass" : "Fail";

// typeof
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"

// Spread
let nums = [1, 2, 3];
let more = [...nums, 4, 5];    // [1, 2, 3, 4, 5]

// Optional Chaining
let city = user?.address?.city; // undefined if null

// Nullish Coalescing
let timeout = config.timeout ?? 3000;
Operator Precedence Table
Priority	Operator	Example
1 (Highest)	() Grouping	(a + b) * c
2	** Exponentiation	2 ** 3
3	++, --, !, typeof	++x, !flag
4	*, /, %	a * b / c
5	+, -	a + b
6	<, >, <=, >=	a > b
7	==, ===, !=, !==	a === b
8	&&	a && b
9	||	a || b
10 (Lowest)	=, +=, -=	a = b + c
QA Examples — Operators
🔹 Q: Difference between == and === in test assertions? 💡 A: Always use === (strict). == does coercion: 0 == '' is true but 0 === '' is false. === catches type mismatches.

🔹 Q: When to use optional chaining (?.) in automation? 💡 A: Nested API data: response?.data?.users?.[0]?.name. Prevents "Cannot read property of undefined" crashes.

🔹 Q: What does spread do with objects? 💡 A: Copies properties: { ...original, status: 'modified' }. Great for test data variations.

🔹 Q: Why is NaN === NaN false? 💡 A: IEEE 754 standard. Use Number.isNaN(value) to check for NaN.

🔹 Q: What is short-circuit evaluation? 💡 A: && stops if left is false, || stops if left is true. Example: element && element.click() skips if null.

🟢 SECTION 4: HOISTING IN JAVASCRIPT

What is Hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during compilation. Only DECLARATIONS are hoisted, not initializations.

Hoisting with var
Variables declared with var are hoisted and initialized with undefined.

Example 1: var hoisting
console.log(myName);   // undefined (hoisted but not assigned)
var myName = "Dev";
console.log(myName);   // "Dev"

// JS interprets as:
// var myName;           <-- declaration hoisted
// console.log(myName);  <-- undefined
// myName = "Dev";       <-- assignment stays
Example 2: var inside function
function getStatus() {
    console.log(status);    // undefined
    var status = "Active";
    console.log(status);    // "Active"
}
getStatus();
Example 3: var leaks out of blocks
for (var i = 0; i < 3; i++) { }
console.log(i);  // 3 (var leaks out of the block!)
Hoisting with let
let is hoisted but NOT initialized. It enters a Temporal Dead Zone (TDZ) until the declaration. Accessing in TDZ throws ReferenceError.

Example 4: let Temporal Dead Zone
// console.log(score); // ReferenceError: Cannot access before initialization
let score = 100;
console.log(score);    // 100
Example 5: let block scoping
{
    let x = 10;
    console.log(x);   // 10
}
// console.log(x);    // ReferenceError (not defined outside block)
Example 6: let in loops (new binding each iteration)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2  (each iteration gets its own i)

for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// Output: 3, 3, 3  (all share same j)
Hoisting with const
const behaves like let for hoisting (TDZ), but MUST be assigned at declaration and cannot be reassigned.

Example 7: const hoisting
// console.log(API_URL); // ReferenceError (TDZ)
const API_URL = "https://api.example.com";
console.log(API_URL);    // "https://api.example.com"
// API_URL = "other";    // TypeError: Assignment to constant
Example 8: const with objects (reference is constant)
const config = { timeout: 3000, retries: 3 };
config.timeout = 5000;   // ✅ Allowed! (modify property)
config.newProp = true;   // ✅ Allowed! (add property)
// config = {};           // ❌ TypeError (cannot reassign)
Example 9: Function declarations are fully hoisted
sayHello();  // "Hello!" — works!

function sayHello() {
    console.log("Hello!");
}

// Function expressions are NOT hoisted:
// greet(); // TypeError: greet is not a function
var greet = function() { console.log("Hi!"); };
Example 10: Arrow functions and hoisting
// runTest(); // ReferenceError (TDZ)
const runTest = () => {
    console.log("Test running...");
};
runTest();   // "Test running..."
Hoisting Comparison Table
Feature	var	let	const
Hoisted?	Yes	Yes (TDZ)	Yes (TDZ)
Initial Value	undefined	Not initialized	Not initialized
Scope	Function	Block	Block
Re-declarable?	Yes	No	No
Re-assignable?	Yes	Yes	No
Before declaration?	undefined	ReferenceError	ReferenceError
Must initialize?	No	No	Yes
QA Examples — Hoisting
🔹 Q: Should I use var, let, or const in tests? 💡 A: Use const by default. let only when value must change. Avoid var — its function-scoping causes bugs.

🔹 Q: Why does const config = {} allow config.timeout = 5000? 💡 A: const prevents reassignment of the binding, but object internals can change. Use Object.freeze() for immutability.

🔹 Q: Why does setTimeout loop with var print same number? 💡 A: var is function-scoped, all iterations share same variable. Use let for new binding per iteration.

🔹 Q: Are class declarations hoisted? 💡 A: Yes, but they stay in the TDZ (like let/const). Cannot use a class before its declaration.

🔹 Q: A test variable accessed before let declaration fails. Why? 💡 A: Temporal Dead Zone. let/const are hoisted but not initialized. Move declaration above first usage.

🟢 SECTION 5: STATEMENTS & CONTROL FLOW
What is a Statement?
A statement is an instruction that JavaScript executes — declaring variables, calling functions, making decisions, or repeating actions.

Category	Statements	Purpose
Declaration	var, let, const, function, class	Create variables/functions/classes
Conditional	if...else, switch, ternary	Execute based on conditions
Loop	for, while, do...while, for...in, for...of	Repeat code
Jump	break, continue, return, throw	Change flow
Exception	try...catch...finally	Handle errors
🟢 5.1: if...else Statement
Executes code if condition is true. Optional else runs if false. Chain with else if.

Example 1: Basic if...else
let age = 18;
if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Too young to vote.");
}
Example 2: if...else if chain
let score = 85;
if (score >= 90) console.log("Grade: A");
else if (score >= 80) console.log("Grade: B");
else if (score >= 70) console.log("Grade: C");
else if (score >= 60) console.log("Grade: D");
else console.log("Grade: F");
// Output: "Grade: B"
Example 3: Nested if
let isLoggedIn = true;
let userRole = "admin";
if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin! Full access.");
    } else {
        console.log("Welcome, User! Read-only.");
    }
} else {
    console.log("Please log in first.");
}
Example 4: QA — Test Status Validation
function validateTest(expected, actual) {
    if (expected === actual) {
        console.log("✅ TEST PASSED");
        return "PASS";
    } else {
        console.log(`❌ TEST FAILED: Expected "${expected}", Got "${actual}"`);
        return "FAIL";
    }
}
validateTest(200, 200);   // ✅ TEST PASSED
validateTest(200, 404);   // ❌ TEST FAILED
Example 5: Truthy and Falsy
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy
if ("hello") console.log("Truthy!");       // Truthy!
if (0) console.log("Won't print");         // Falsy
if ([]) console.log("Empty array=truthy!"); // Truthy!
if ({}) console.log("Empty object=truthy!"); // Truthy!
if (null) console.log("Won't print");      // Falsy
Example 6: if with logical operators
let statusCode = 200;
let body = { data: [1, 2, 3] };
if (statusCode === 200 && body.data.length > 0) {
    console.log("API returned valid data");
} else {
    console.log("API failed: " + statusCode);
}
🔹 Q: Why does if([]) evaluate to true? 💡 A: Empty array is an object, all objects are truthy. Empty string '' is falsy.

🔹 Q: Should I use if(response) or if(response !== null)? 💡 A: Use if(response != null) to catch both null and undefined. if(response) fails on 0 or "" which may be valid.

🟢 5.2: switch Statement
Evaluates expression and executes matching case. Uses strict === comparison.

Example 1: Day of the week
let day = new Date().getDay();
switch (day) {
    case 0: console.log("Sunday"); break;
    case 1: console.log("Monday — Sprint Planning"); break;
    case 2: console.log("Tuesday — Development"); break;
    case 3: console.log("Wednesday — Code Review"); break;
    case 4: console.log("Thursday — Testing"); break;
    case 5: console.log("Friday — Deployment"); break;
    case 6: console.log("Saturday"); break;
}
Example 2: HTTP Status Codes (QA)
function handleResponse(statusCode) {
    switch (statusCode) {
        case 200: return "OK";
        case 201: return "Created";
        case 400: return "Bad Request";
        case 401: return "Unauthorized";
        case 404: return "Not Found";
        case 500: return "Server Error";
        default: return `Unknown: ${statusCode}`;
    }
}
Example 3: Fall-through (grouping)
let browser = "Chrome";
switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
        console.log("Chromium-based"); break;
    case "Firefox":
        console.log("Mozilla"); break;
    case "Safari":
        console.log("Apple"); break;
}
Example 4: Test Priority
function getPriority(severity) {
    switch (severity.toLowerCase()) {
        case "critical": return 1;
        case "high": return 2;
        case "medium": return 3;
        case "low": return 4;
        default: return 3;
    }
}
Example 5: switch(true) with expressions
let score = 85;
switch (true) {
    case (score >= 90): console.log("Excellent"); break;
    case (score >= 80): console.log("Good"); break;
    case (score >= 70): console.log("Average"); break;
    default: console.log("Needs Improvement");
}
🔹 Q: What if you forget break? 💡 A: Code falls through to ALL subsequent cases. Always include break unless intentional.

🔹 Q: Does switch use == or ===? 💡 A: Strict ===. switch('5') with case 5: will NOT match.

🟢 5.3: for Loop
Repeats code a known number of times: initialization, condition, update.

Example 1: Basic counting
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}
Example 2: Loop through array
let tests = ["Login", "Signup", "Search", "Checkout", "Logout"];
for (let i = 0; i < tests.length; i++) {
    console.log(`Running test ${i+1}: ${tests[i]}`);
}
Example 3: Nested loops — Test Matrix
let browsers = ["Chrome", "Firefox", "Safari"];
let devices = ["Desktop", "Mobile", "Tablet"];
for (let b = 0; b < browsers.length; b++) {
    for (let d = 0; d < devices.length; d++) {
        console.log(`Test: ${browsers[b]} + ${devices[d]}`);
    }
}
// 9 combinations total
Example 4: Reverse loop
let logs = ["Step 1: Login", "Step 2: Click", "Step 3: Verify"];
for (let i = logs.length - 1; i >= 0; i--) {
    console.log(logs[i]);
}
Example 5: break and continue
let results = ["Pass", "Pass", "Skip", "Fail", "Critical", "Pass"];
for (let i = 0; i < results.length; i++) {
    if (results[i] === "Skip") continue;  // Skip to next
    if (results[i] === "Critical") {
        console.log("CRITICAL — Stopping!");
        break;  // Exit loop
    }
    console.log(`Test ${i+1}: ${results[i]}`);
}
🔹 Q: for loop vs forEach vs map? 💡 A: for when you need break/continue. forEach for simple iteration. map for transforming to new array.

🟢 5.4: while Loop
Repeats while condition is true. Condition checked BEFORE each iteration.

Example 1: Basic while
let count = 1;
while (count <= 5) {
    console.log("Count: " + count);
    count++;
}
Example 2: Polling for element (QA)
let attempts = 0, found = false;
while (!found && attempts < 10) {
    attempts++;
    console.log(`Attempt ${attempts}: Looking...`);
    found = attempts === 7;  // Simulating
}
console.log(found ? `Found after ${attempts}` : "Not found");
Example 3: Read until end marker
let data = ["item1", "item2", "item3", "END", "item4"];
let i = 0;
while (data[i] !== "END" && i < data.length) {
    console.log("Processing: " + data[i]);
    i++;
}
Example 4: Retry simulation
let success = false, retries = 0;
while (!success && retries < 5) {
    retries++;
    success = Math.random() > 0.7;
    console.log(`Retry ${retries}: ${success ? "OK" : "Failed"}`);
}
Example 5: Number guessing
let target = 42, guess = 0, tries = 0;
while (guess !== target) {
    guess = Math.floor(Math.random() * 100) + 1;
    tries++;
}
console.log(`Found ${target} in ${tries} tries!`);
🔹 Q: How to prevent infinite loop? 💡 A: Always update condition variable inside loop. Add safety counter: while(!done && attempts < MAX).

🟢 5.5: do...while Loop
Like while, but runs at least once. Condition checked AFTER first execution.

Example 1: Basic do...while
let num = 1;
do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);
Example 2: Runs even when false
let x = 100;
do {
    console.log("Runs once even though x > 5");
} while (x < 5);
// With while, this would NEVER execute.
Example 3: Input validation
let inputs = ["", "", "validInput"];
let idx = 0, userInput;
do {
    userInput = inputs[idx];
    idx++;
} while (!userInput && idx < inputs.length);
console.log("Accepted: " + userInput);
Example 4: Menu simulation
let actions = ["view", "edit", "delete", "exit"];
let i = 0;
do {
    console.log(`Action: ${actions[i]}`);
    i++;
} while (actions[i-1] !== "exit" && i < actions.length);
Example 5: Retry API at least once
let resp = null, attempt = 0;
do {
    attempt++;
    resp = attempt >= 3 ? { status: 200 } : null;
} while (resp === null && attempt < 5);
console.log(`Status ${resp?.status} after ${attempt} attempts`);
🔹 Q: When use do...while vs while? 💡 A: do...while when code must run at least once — like one API call before checking retry.

🟢 5.6: for...in Loop
Iterates over enumerable property keys of an object. Not recommended for arrays.

Example 1: Object properties
let testResult = { name: "Login Test", status: "Pass", duration: "2.5s" };
for (let key in testResult) {
    console.log(`${key}: ${testResult[key]}`);
}
Example 2: Count properties
let config = { timeout: 3000, retries: 3, headless: true };
let count = 0;
for (let prop in config) { count++; }
console.log("Total: " + count);  // 3
Example 3: Filter properties
let report = { passed: 45, failed: 5, skipped: 3, blocked: 2 };
for (let key in report) {
    if (report[key] > 0 && key !== "passed") {
        console.log(`Warning: ${key}: ${report[key]}`);
    }
}
Example 4: hasOwnProperty check
let base = { framework: "Selenium" };
let project = Object.create(base);
project.language = "JavaScript";
for (let key in project) {
    console.log(project.hasOwnProperty(key) ? `Own: ${key}` : `Inherited: ${key}`);
}
Example 5: Compare two objects
let expected = { name: "Dev", age: 25 };
let actual = { name: "Dev", age: 26 };
for (let key in expected) {
    if (expected[key] !== actual[key]) {
        console.log(`MISMATCH: ${key}`);
    }
}
🔹 Q: Why not for...in on arrays? 💡 A: Iterates ALL enumerable props (including inherited), no order guarantee. Use for...of or forEach.

🟢 5.7: for...of Loop
Iterates over values of iterable objects (arrays, strings, Maps, Sets).

Example 1: Array values
let browsers = ["Chrome", "Firefox", "Safari"];
for (let browser of browsers) {
    console.log("Testing: " + browser);
}
Example 2: String characters
for (let char of "JavaScript") {
    console.log(char);
}
Example 3: Map
let results = new Map([["TC001","Pass"],["TC002","Fail"],["TC003","Skip"]]);
for (let [id, result] of results) {
    console.log(`${id}: ${result}`);
}
Example 4: Set (unique values)
let errors = new Set(["Timeout", "404", "Timeout", "500"]);
for (let error of errors) {
    console.log("Error: " + error);
}
// Timeout, 404, 500 (duplicates removed)
Example 5: entries() for index + value
let steps = ["Open browser", "Navigate", "Click login", "Verify"];
for (let [i, step] of steps.entries()) {
    console.log(`Step ${i+1}: ${step}`);
}
🔹 Q: Difference between for...in and for...of? 💡 A: for...in = KEYS (property names). for...of = VALUES. Use for...in for objects, for...of for arrays.

🟢 5.8: Array Methods (forEach, map, filter, reduce)
Example 1: forEach
let tests = ["Login", "Signup", "Search", "Cart", "Payment"];
tests.forEach((test, i) => console.log(`${i+1}. ${test}`));
Example 2: map — transform
let prices = [10, 20, 30, 40, 50];
let withTax = prices.map(p => p * 1.1);
console.log(withTax);  // [11, 22, 33, 44, 55]
Example 3: filter — keep matching
let scores = [85, 42, 97, 66, 51, 78, 39];
let passed = scores.filter(s => s >= 60);
console.log(passed);  // [85, 97, 66, 78]
Example 4: reduce — accumulate
let durations = [2.5, 1.8, 3.2, 0.9, 4.1];
let total = durations.reduce((sum, d) => sum + d, 0);
console.log(`Total: ${total}s`);  // 12.5s
Example 5: Chaining — QA pipeline
let results = [
    { name: "Login", status: "pass", time: 2.5 },
    { name: "Signup", status: "fail", time: 4.1 },
    { name: "Search", status: "pass", time: 1.2 },
    { name: "Cart", status: "fail", time: 3.8 },
];
let failed = results.filter(t => t.status === "fail").map(t => t.name);
console.log("Failed:", failed);  // ["Signup", "Cart"]
🔹 Q: map vs forEach? 💡 A: map returns NEW array (transforming). forEach returns undefined (side effects). Use map when you need the result.

🟢 5.9: try...catch...finally
Handle errors gracefully. try = risky code, catch = handle error, finally = always runs.

Example 1: Basic try...catch
try {
    let result = JSON.parse("invalid json");
} catch (error) {
    console.log("Error: " + error.message);
}
Example 2: try...catch...finally
function fetchData(url) {
    try {
        if (!url) throw new Error("URL required!");
        console.log("Fetched: " + url);
    } catch (err) {
        console.log("FAILED: " + err.message);
    } finally {
        console.log("Cleanup done.");
    }
}
Example 3: Custom errors
function validateAge(age) {
    if (typeof age !== "number") throw new TypeError("Must be number");
    if (age < 0) throw new RangeError("Cannot be negative");
    return "Valid: " + age;
}
try {
    validateAge(-5);
} catch (e) {
    console.log(`${e.constructor.name}: ${e.message}`);
}
Example 4: Nested try...catch
try {
    try {
        JSON.parse("{bad}");
    } catch (inner) {
        console.log("Inner: " + inner.message);
        throw new Error("Cannot continue");
    }
} catch (outer) {
    console.log("Outer: " + outer.message);
}
Example 5: QA — API Test
async function testAPI(endpoint) {
    try {
        let res = await fetch(endpoint);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        let data = await res.json();
        console.log("✅ PASSED");
        return data;
    } catch (error) {
        console.log(`❌ FAILED: ${error.message}`);
        return null;
    } finally {
        console.log("📝 Test logged.");
    }
}
🔹 Q: Should every function have try...catch? 💡 A: No. Use for operations that can fail: API calls, JSON parsing, file ops. Let simple errors surface naturally.

🟢 LOOP COMPARISON TABLE
Loop	Best For	break/continue?
for	Known count	Yes
while	Unknown count, check first	Yes
do...while	Must run once	Yes
for...in	Object keys	Yes
for...of	Array/String/Map values	Yes
forEach	Simple iteration	No
map	Transform to new array	No
filter	Select matching items	No
reduce	Accumulate to one value	No
🟢 NEXT 5 TOPICS TO COVER
#	Topic	What Students Will Learn
1	Functions	Declaration, Expression, Arrow, IIFE, Closures, Callbacks, Higher-order functions
2	Objects & Prototypes	Object methods, this keyword, Prototype chain, ES6 Classes, Destructuring
3	Arrays In-Depth	splice, slice, find, includes, flat, sort, every, some, destructuring
4	Async JavaScript	Callbacks, Promises, async/await, Event Loop, Error handling in async
5	DOM Manipulation	Selectors, Events, Event Delegation, Forms — essential for QA automation
Why This Order? Functions are used everywhere. Objects are JS's foundation. Arrays are the most common data structure in testing. Async JS is critical for modern web testing. DOM connects everything to browser automation.
