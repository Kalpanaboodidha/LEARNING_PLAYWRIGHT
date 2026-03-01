// Element Visibility Checker
// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

// Examples:
// Input:
// isPresent = true, isDisplayed = true, isEnabled = false
// Output:
// Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.
// 💡 Explanation:Element is present and displayed but not enabled. Severity is WARNING because it's not fully interactable.


let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

// Determine State
let state;

if (!isPresent) {
  state = "NOT FOUND";
} else if (isPresent && !isDisplayed) {
  state = "HIDDEN";
} else if (isPresent && isDisplayed && !isEnabled) {
  state = "DISABLED";
} else if (isPresent && isDisplayed && isEnabled) {
  state = "READY";
}

// Determine Severity
let severity =
  !isPresent
    ? "CRITICAL"
    : (!isDisplayed || !isEnabled)
    ? "WARNING"
    : "OK";

// Determine Action
let action;

switch (state) {
  case "NOT FOUND":
    action = "Element not found. Check locator or wait for render.";
    break;

  case "HIDDEN":
    action = "Element exists but hidden. Check visibility or scroll into view.";
    break;

  case "DISABLED":
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
    break;

  case "READY":
    action = "Element is ready for interaction.";
    break;

  default:
    action = "Unknown state.";
}

// Output
console.log(`Status: ${state} Severity: ${severity} Action: ${action}`);