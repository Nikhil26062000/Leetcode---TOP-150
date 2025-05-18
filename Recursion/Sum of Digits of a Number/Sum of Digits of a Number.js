/*
Example:
n = 999

Recursive calls:
helper(999) → sum = 9
helper(99)  → sum = 9 + 9 = 18
helper(9)   → sum = 18 + 9 = 27
helper(0)   → base case → return

Final result = 27

-------------------------------------------------------
Time Complexity: O(log n)
- Each recursive call processes one digit of n.
- Number of digits in a number n is approximately log₁₀(n).
- So, total recursive calls = number of digits = O(log n)

Space Complexity: O(log n)
- Each recursive call uses stack space.
- Maximum depth of recursion = number of digits in n = O(log n)
- So, auxiliary (call stack) space is O(log n)
-------------------------------------------------------
*/


class Solution {
    sumOfDigits(n) {
        let sum = 0;

        // Helper function to recursively add digits
        const helper = (num) => {
            if (num == 0) return;

            let rem = num % 10;         // Extract last digit
            sum = sum + rem;            // Add it to the sum
            let newNum = Math.floor(num / 10);  // Remove the last digit
            helper(newNum);             // Recurse with remaining number
        };

        helper(n);
        return sum;
    }
}