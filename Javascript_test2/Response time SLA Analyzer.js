// Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.

// Examples:
// Input:
// responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
// Output:
// Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED
// 💡 Explanation:The while loop iterates through response times, tracking min/max and counting breaches over 500ms.


let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let total = responseTimes.length;
let i = 0;

let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let breaches = 0;

while (i < total) {
  let time = responseTimes[i];

  // Track min & max
  if (time < min) min = time;
  if (time > max) max = time;

  // Sum for average
  sum += time;

  // Count SLA breaches
  if (time > SLA_LIMIT) {
    breaches++;
  }

  i++;
}

// Calculations
let average = (sum / total).toFixed(2);
let breachPercentage = ((breaches / total) * 100).toFixed(2);

let status =
  breaches > 0
    ? " SLA VIOLATED"
    : " SLA COMPLIANT";

// Output
console.log(`Total Requests: ${total}`);
console.log(`Min Response: ${min}ms`);
console.log(`Max Response: ${max}ms`);
console.log(`SLA Breaches: ${breaches} (${breachPercentage}%)`);
console.log(`Overall Status: ${status}`);