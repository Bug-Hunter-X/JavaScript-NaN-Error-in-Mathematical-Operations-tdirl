# JavaScript NaN Error in Mathematical Operations

This repository demonstrates a common JavaScript error where using null or undefined in mathematical operations leads to NaN (Not a Number). The bug.js file shows the problematic code, and bugSolution.js provides a solution.

## Bug Description

The `bar` function uses the `foo` function, which performs simple addition. However, if either parameter is null or undefined, the addition leads to NaN. This NaN propagates through the multiplication, resulting in NaN as the final output.

## Solution

The provided solution uses default parameters to handle null or undefined values. This ensures a numerical value is always used in the operations, preventing NaN errors.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (e.g., browser's console, Node.js).
3. Execute each file to observe the bug and its solution.
