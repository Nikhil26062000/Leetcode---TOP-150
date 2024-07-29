

// ------------------------------------------------------------------------>
//     😂 2nd Attempt 💖
// ------------------------------------------------------------------------>

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    let left = 0;
    let sum = 0;

    for(let right = 0; right < nums.length; right++){
        sum += nums[right]

        while(sum >= target){
            minLength = Math.min(minLength,right-left+1);
            sum = sum - nums[left];
            left++;
        }

    }
     return minLength === Infinity ? 0 : minLength;
};




// ------------------------------------------------------------------------>
//      1st Attempt
// ------------------------------------------------------------------------>

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Shrink the window as long as the sum is greater than or equal to the target
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1); // Update minimum length
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};