/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //This code runs fine but time complexity is : overall time complexity of your solution is dominated by the sorting operation, which is O((m + n) log(m + n)) Because Sorting nums1 using Array.prototype.sort() takes O((m + n) log(m + n)) time.
  // let j=0
  // for(let i=0;i<m+n;i++){
  //     if(i<m){
  //         continue;
  //     }else{
  //         nums1[i] = nums2[j++]
  //     }
  // }
  // return nums1.sort((a,b)=>a-b)

  //! Optimisig the code

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  //*Lil bit explanation : While both i and j are greater than or equal to 0, we perform the following steps:
  //* If the element at nums1[i] is greater than the element at nums2[j], we place the element at nums1[i] at index k in nums1, and then decrement both i and k.
  //* Otherwise, we place the element at nums2[j] at index k in nums1, and then decrement both j and k.



  // If there are remaining elements in nums2, copy them to nums1......
  // :--> to understand this part comment out the below code and write this code if condition :
  //  if(m==0 && n==1){
  //         nums1[k] = nums2[0]
  //     }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
