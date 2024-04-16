/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
   const output = new Array(n).fill(1);

   // Calculate products of all elements to the left of each index
   let leftProduct = 1;
   for (let i = 0; i < n; i++) {
       output[i] *= leftProduct;
       leftProduct *= nums[i];
   }

   // Calculate products of all elements to the right of each index and update the output
   let rightProduct = 1;
   for (let i = n - 1; i >= 0; i--) {
       output[i] *= rightProduct;
       rightProduct *= nums[i];
   }

   return output;
};