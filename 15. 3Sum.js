

// --------------------------------------------------------------------------->
//         👌 1st Attempt 🤞 
// --------------------------------------------------------------------------->


/**
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);  // Step 1: Sort the array [-4, -1, -1, 0, 1, 2]
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;  // Skip duplicates
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for left and right : this while loop will skip the next value if the value is same as nums[left]
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for left and right : this while loop will skip the prev value if the value is same as nums[right]
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

