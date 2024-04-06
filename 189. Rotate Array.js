/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length; // Adjust k if it's greater than nums.length
    reverse(nums, 0, nums.length - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the remaining elements
};

function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        // Move towards the center
        start++;
        end--;
    }
}
