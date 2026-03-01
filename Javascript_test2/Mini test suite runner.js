// Mini Test Suite Runner
// Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

// Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.

// Examples:
// Input:
// { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
// Output:
// ✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED
// 💡 Explanation:Each test is evaluated based on its comparison type using switch, with results tracked via counters and reported at the end.


// ================== FIXED CONFIG ==================
// const → fixed values
const testCases = [
  { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
  { name: "Auth token exists", actual: "token123", expected: true, type: "truthy" },
  { name: "Response time check", actual: 300, expected: 500, type: "lessThan" },
  { name: "Type validation", actual: 123, expected: "number", type: "typeCheck" }
];

const TOTAL = testCases.length;

// ================== COUNTERS ==================
// var → global counter tracking
var passed = 0;
var failed = 0;
var errors = 0;

// Track consecutive passes
let consecutivePasses = 0;
let i = 0;

// ================== RUN TESTS ==================
while (i < TOTAL) {
  let test = testCases[i];
  let result = false;

  try {
    switch (test.type) {

      case "strictEqual":
        result = test.actual === test.expected;
        break;

      case "looseEqual":
        result = test.actual == test.expected;
        break;

      case "typeCheck":
        result = typeof test.actual === test.expected;
        break;

      case "truthy":
        result = !!test.actual === true;
        break;

      case "lessThan":
        result = test.actual < test.expected;
        break;

      default:
        throw new Error("Invalid comparison type");
    }

    if (result) {
      passed++;
      consecutivePasses++;
      console.log(` TC-${String(i + 1).padStart(2, "0")}: ${test.name} → PASS`);
    } else {
      failed++;
      consecutivePasses = 0;
      console.log(` TC-${String(i + 1).padStart(2, "0")}: ${test.name} → FAIL`);
    }

  } catch (err) {
    errors++;
    failed++;
    console.log(`⚠ TC-${String(i + 1).padStart(2, "0")}: ${test.name} → ERROR`);
  }

  i++;
}

// ================== FIND FIRST FAILURE ==================
let j = 0;
let firstFailure = null;

do {
  if (testCases[j].actual !== testCases[j].expected) {
    firstFailure = testCases[j].name;
    break;
  }
  j++;
} while (j < TOTAL);

// ================== REPORT ==================
let passRate = ((passed / TOTAL) * 100).toFixed(2);

let overallStatus =
  failed === 0
    ? " ALL PASSED"
    : " FAILED";

console.log("\n===== TEST SUMMARY =====");
console.log(`Total: ${TOTAL}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Errors: ${errors}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Consecutive Passes From Start: ${consecutivePasses}`);
console.log(
  `First Failure: ${firstFailure ?? "None"}`
);
console.log(`Overall: ${overallStatus}`);