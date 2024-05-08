
// ---------------------------------- 2nd Attempt ------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let finalResult ;
    let count = 0;

    for(let num of nums){
        if(count === 0){
            finalResult = num
        }
        count += num === finalResult ? 1 : -1 // here we are balancing the two different number's frequency . on each step we are checking that if the number is previous one then we will add 1 to count and if it is different will substract 1 to count . in this way at the end we will either get count as very big let say 5,10,20 etc or we will get count as 1 because suppose if the count is getting + and - till 2nd last element and at 2nd last element we have count = 0 then in last element we will have count as 1 and that element will be assigned as finalresult .
    }
    return finalResult
};



// -------------------------------- 1st Attempt ---------------------

//!Follow-up: Could you solve the problem in linear time and in O(1) space?

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

    //? above solution is mine and correct but this is not following this codition ---> Follow-up: Could you solve the problem in linear time and in O(1) space?

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