/**
 *
 * 1st Attempt
 * done by myself
 * iterative approach
 *
 */

class Solution {
  gfSeries(n) {
    //code here
    let arr = [0, 1];
    const func = (n) => {
      for (let i = 3; i <= n; i++) {
        let num = i - 2;
        let num2 = i - 1;
        let finalNum = arr[num - 1] * arr[num - 1] - arr[num2 - 1];
        arr.push(finalNum);
      }
    };
    func(n);
    console.log(...arr);
  }
}

/**
 *
 * by chatgpt
 * recursive approach
 * 
 */
class Solution {
  gfSeries(n) {
    // Initialize the array with the first two terms
    let arr = [0, 1];

    // Recursive helper function
    const func = (index) => {
      if (index >= n) return; // Base case: stop when index reaches n
      let nextTerm = arr[index - 2] ** 2 - arr[index - 1];
      arr.push(nextTerm); // Add the computed term to the array
      func(index + 1); // Recursive call for the next term
    };

    // Start computing from the 3rd term (index = 2)
    func(2);

    // Print the series as space-separated values
    console.log(arr.join(" "));
  }
}
