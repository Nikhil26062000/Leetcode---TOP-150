

/**
 * ! 1st Attempt
 */

class Solution {
    printNos(n) {
        // Helper function to build the output recursively
        const buildOutput = (num) => {
            if (num === 1) {
                return "1";
            }
            return buildOutput(num - 1) + " " + num;
        };

        // Output the result at once
        console.log(buildOutput(n));
    }
}