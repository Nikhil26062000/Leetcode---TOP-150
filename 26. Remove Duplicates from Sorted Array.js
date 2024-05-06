//* Solved by me : OKAY


// --------------- 2nd Attempt -----------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c = 1;
    for(let i=1;i<nums.length;i++){
          if(nums[i]==nums[c-1]){
              continue
          }else{
              nums[c++] = nums[i]
          }
    }
    return c
  };



// ------------------- 1st Attempt ------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1; // Initialize count to 1 since the first element is always unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[count - 1]) {
            continue; // Skip to the next iteration if the current element is a duplicate
        } else {
            nums[count++] = nums[i]; // Store the unique element at the next available index
        }
    }
    return count; // Return the count of unique elements
};
