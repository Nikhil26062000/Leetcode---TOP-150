

// ------------------------ 2nd Attempt ------------------------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res =new Array(nums.length).fill(1)
    
    // LP : [1,1,2,6]
    //RP :  [24,12,4,1]
    //LP=res: []  will be the final output


    // finding the leftProduct
    let LP = 1
    for(let i=0;i<nums.length;i++){
        res[i] *= LP //[1,1,2,6]
        LP = LP*nums[i]
    }

    //finding the right product
    let rp = 1
    for(let i=nums.length-1;i>=0;i--){
        res[i]*=rp //[24,12,8,6]
        rp*=nums[i]
    }
    return res
};





// -------------------- 1st Attempt ----------------------------------------------------

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