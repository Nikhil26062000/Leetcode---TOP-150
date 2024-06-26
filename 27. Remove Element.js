

// ----------- 3rd Attempt ----------------------
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let c = 0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]==val){
            continue
        }else{
            nums[c++]=nums[i]
        }
    }
    return c
};


// --------------------- 2nd Attempt ----------------------------

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let c=0;// act as index to overwrite the nums value
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
          nums[c++]=nums[i]
        }
    }
    return c
};


// ---------------- 1st Attempt -------------------------------

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // let count = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == val) {
    //         nums.splice(i,1,2000)
    //         continue
    //     }else{
    //         count++
    //     }
       
    // }
    // nums.sort((a,b)=>a-b)
    // return count

    //? above code runs fine but lets modify the code bit more
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};