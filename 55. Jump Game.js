

// ---------------- 2nd Attempt ------------------------------

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1)

        return true;

    // To keep the maximum index that can be reached...

    let maximum = nums[0];

    // Traverse all the elements through loop...

    for (let i = 0; i < nums.length; i++) {

        //if there is no way to jump to next...

        // so we should return false...

        if (maximum <= i && nums[i] == 0)

            return false;

        //update the maximum jump...    

        if (i + nums[i] > maximum) {

            maximum = i + nums[i];

        }

        //maximum is enough to reach the end...

        if (maximum >= nums.length - 1)

            return true;

    }

    return false;
};


// ----------------- 1st ATtempt -----------------------------

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length <= 1)
        return true;
    let maximum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (maximum <= i && nums[i] == 0)
            return false;
        //update the maximum jump...    
        if (i + nums[i] > maximum) {
            maximum = i + nums[i];
        }
        if (maximum >= nums.length - 1)
            return true;
    }
    return false;
}