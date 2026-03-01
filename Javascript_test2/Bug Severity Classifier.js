// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

// Examples:
// Input:
// frequency = "always", impact = "blocker"
// Output:
// Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
// 💡 Explanation:A bug that always occurs and is a blocker gets the highest severity P0, requiring immediate action.


let frequency = "always"; // always | often | rarely
let impact = "blocker";   // blocker | major | minor

let severity;

if (frequency === "always") {
  if (impact === "blocker") severity = "P0 - Critical: Stop release immediately";
  else if (impact === "major") severity = "P1 - High: Fix before release";
  else if (impact === "minor") severity = "P2 - Medium: Fix soon";
}

else if (frequency === "often") {
  if (impact === "blocker") severity = "P1 - High: Fix before release";
  else if (impact === "major") severity = "P2 - Medium: Prioritize fix";
  else if (impact === "minor") severity = "P3 - Low: Schedule for later";
}

else if (frequency === "rarely") {
  if (impact === "blocker") severity = "P2 - Medium: Investigate quickly";
  else if (impact === "major") severity = "P3 - Low: Monitor & fix";
  else if (impact === "minor") severity = "P4 - Minor: Fix if possible";
}

console.log(
  `Bug Title: Checkout page crashes on applying coupon\n` +
  `Frequency: ${frequency}\n` +
  `Impact: ${impact}\n` +
  `Severity: ${severity}`
);