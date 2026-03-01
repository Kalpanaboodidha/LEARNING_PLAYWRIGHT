// Test Case Result Counter
// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

// Examples:
// Input:
// testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
// Output:
// Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.
// 💡 

// Explanation:The for loop iterates through results, 
// counting each type. With 2 failures (≤2), 
// the verdict is to review before release.

// Solution
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

// Count results
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passed++;
  } else if (testResults[i] === "fail") {
    failed++;
  } else if (testResults[i] === "skip") {
    skipped++;
  }
}

// Calculations
let total = testResults.length;
let passRate = ((passed / total) * 100).toFixed(2);

let verdict;

if (failed === 0) {
  verdict = "Ready for release - All tests passed.";
} else if (failed <= 2) {
  verdict = "Minor failures. Review before release.";
} else {
  verdict = "Critical failures. Block release.";
}

// Output
console.log(`Total Tests : ${total}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Skipped: ${skipped}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`VERDICT: ${verdict}`);