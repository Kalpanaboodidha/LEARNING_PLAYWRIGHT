// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).

// Examples:
// Input:
// Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
// Output:
// Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected
// 💡 Explanation:After 3 consecutive failures, the account is locked. Even correct credentials on attempt 4 are rejected.



// Fixed credentials & threshold (const)
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

// Global failure counter (var)
var failedAttempts = 0;
var accountLocked = false;

// Simulated login attempts
let attempts = ["wrong", "wrong", "wrong", "correct"];

let i = 0;

do {
  let attemptNumber = i + 1;

  if (accountLocked) {
    console.log(`Attempt ${attemptNumber}: ACCOUNT LOCKED - Rejected`);
  } else {
    let passwordInput = attempts[i];

    if (passwordInput === VALID_PASSWORD && !accountLocked) {
      console.log(`Attempt ${attemptNumber}: SUCCESS - Login Granted`);
      failedAttempts = 0; // reset on success
    } else {
      failedAttempts++;
      console.log(
        `Attempt ${attemptNumber}: FAILED - Strike ${failedAttempts}/${MAX_ATTEMPTS}`
      );

      if (failedAttempts >= MAX_ATTEMPTS) {
        accountLocked = true;
        console.log("🚨 ACCOUNT LOCKED");
      }
    }
  }

  i++;
} while (i < attempts.length);