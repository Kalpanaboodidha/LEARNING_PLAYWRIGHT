// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

// Examples:
// Input:
// Generate 8 users
// Output:
// USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
// 💡 Explanation:Each user gets a padded ID, sequential name/email, cycling role, and every 3rd user is INACTIVE for edge case testing.



// Fixed roles (const → value won’t change)
const roles = ["admin", "editor", "viewer", "tester", "manager"];

// Global counter (var → function/global scope)
var userCounter = 0;

let totalUsers = 8; // Change this to generate more users

for (let i = 1; i <= totalUsers; i++) {
  userCounter++;

  // Generate padded ID
  let userId = "USR-" + String(userCounter).padStart(4, "0");

  // Generate test data
  let name = "TestUser_" + i;
  let email = `testuser${i}@testingacademy.com`;

  // Cycle roles
  let role = roles[(i - 1) % roles.length];

  // Every 3rd user is inactive
  let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

  // Output
  console.log(`${userId} | ${name} | ${email} | ${role} | ${status}`);
}