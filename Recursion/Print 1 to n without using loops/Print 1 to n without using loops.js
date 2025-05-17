/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Breakdown for n = 1000:
 *
 * 1. Pushing numbers to array:
 *    - We push numbers from 1 to 1000 into the `result` array.
 *    - Each push is O(1) (amortized in JavaScript).
 *    - Total push operations: O(n) = O(1000)
 *
 * 2. .join(" ") operation:
 *    - Each number is converted to a string:
 *      - Numbers 1–9 (9 numbers):     1 digit × 9 = 9 characters
 *      - Numbers 10–99 (90 numbers):  2 digits × 90 = 180 characters
 *      - Numbers 100–999 (900 numbers): 3 digits × 900 = 2700 characters
 *      - Number 1000 (1 number):      4 digits = 4 characters
 *    - Total digits: 9 + 180 + 2700 + 4 = **2893 characters**
 *
 * 3. Spaces between numbers:
 *    - There are (n - 1) spaces for n numbers.
 *    - For n = 1000 → 999 spaces
 *
 * 4. Total characters in the final string:
 *    - Characters from numbers: 2893
 *    - Characters from spaces: 999
 *    - Total = 3892 characters
 *
 * 5. Time Complexity of .join(" "):
 *    - Takes O(total characters), which is ~O(n * log₁₀(n)) due to multi-digit numbers.
 *    - For small values of n, log₁₀(n) is a small constant factor:
 *        - For n = 1000, log₁₀(n) ≈ 3
 *    - Hence, we simplify O(n * log₁₀(n)) to O(n) in Big-O notation.
 *
 * 6. Space Complexity:
 *    - Array holds n numbers → O(n)
 *    - Final joined string takes ~3892 characters → O(n)
 *
 * ✅ Final Summary:
 * -----------------
 * - Time to build array: O(n)
 * - Time for .join(" "): O(n * log₁₀(n)) ≈ O(n)
 * - Total time: O(n)
 * - Total space: O(n)
 */



class Solution {
  printNos(n) {
    const result = [];

    const helper = (i) => {
      if (i > n) return;
      result.push(i);
      helper(i + 1);
    };

    helper(1);
    console.log(result.join(" "));
  }
}












/**
 * ! This is not a optimal solution
 * Recursive function to print numbers from 1 to n as a single string.
 * 
 * Approach:
 * - Base case: If n === 1, return "1".
 * - Recursive case: Call the function for (n-1), then concatenate the result
 *   with a space and the current number n.
 * 
 * Time Complexity Analysis:
 * - Each recursive call concatenates a new string: previous result + " " + n.
 * - The length of the string grows with each call roughly as: 1, 3, 5, ..., (2n-1) characters.
 * - Concatenation involves creating a new string each time, which is O(length of the new string).
 * - So total time is sum of concatenation costs over all calls:
 *   O(1 + 3 + 5 + ... + (2n-1)) = O(n²).
 * 
 * Space Complexity Analysis:
 * - Recursive call stack depth is n, so O(n) space for the recursion.
 * - The final returned string contains all numbers concatenated, 
 *   so space for the string is O(n) (number of digits roughly proportional to n).
 * 
 * Summary:
 * - Time Complexity: O(n²) due to repeated string concatenation on each recursive call.
 * - Space Complexity: O(n) due to recursion depth and the final string size.
 * 
 * Note:
 * This approach is inefficient for large n because of quadratic time complexity.
 * For optimal performance, use an array to collect numbers and join once at the end.
 */


class Solution{
    printTillN(n){
        //code here
        
        const fun = (n) =>{
            if(n===1){
                return "1"
            }
            return fun(n-1) + " " + n
        }
        console.log(fun(n))
    }

}