/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let map = new Map();
    // let max=-1
    // for(let i=0;i<nums.length;i++){
    //     map.set(nums[i],(map.get(nums[i]) || 0)+1)
    //     if(max<map.get(nums[i])){
    //         max=map.get(nums[i])
    //     }
    // }
    // for(let [k,v] of map){
    //     if(v==max){
    //         return k
    //     }
    // }

    //? above solution is mine and correct but this is not followinf this codition ---> Follow-up: Could you solve the problem in linear time and in O(1) space?

    //!To solve the problem in linear time and O(1) space, you can use a variation of the Boyer-Moore Voting Algorithm.--> by chatgpt

    //input  nums = [2,2,1,1,1,2,2]

    let candidate = nums[0];
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    
    return candidate;
};