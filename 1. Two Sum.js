/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = new Map();

    // Traverse the array once
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement required for the current number to reach the target
        let complement = target - nums[i];

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it exists, return the indices of the current number and its complement
            return [numMap.get(complement), i];
        }

        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array
    return [];
};
