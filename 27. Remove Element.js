/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i,1,2000)
            continue
        }else{
            count++
        }
       
    }
    nums.sort((a,b)=>a-b)
    return count
};