

// ---------- Second attempt (solved by myself)-----------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c = 1;
    let twice = false;
    for(let i=1;i<nums.length;i++){
     if(nums[i]==nums[c-1] && twice==false){
         nums[c++] = nums[i]
         twice = true
         continue
     }
     if(nums[i]==nums[c-1] && twice==true) continue
     twice = false;
     nums[c++] = nums[i]
 
    }
    return c
 };



// -------------- first attempt ----------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c=0 ;
   
   for(let i=0 ; i<nums.length ; i++){
       if(nums[i] !== nums[i+2]){
           nums[c] = nums[i];
           c++
       }
   }

   return c;
};