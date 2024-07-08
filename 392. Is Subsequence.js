

// --------------------------------------------------------------------->
//     👌 3rd Attempt : Done by me 😁
// --------------------------------------------------------------------->

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let ptr1 = 0;
    let ptr2 = 0;
    while(ptr2 <t.length){
        if(s[ptr1]==t[ptr2]){
            ptr1++;
            ptr2++;
        }else{
            ptr2++
        }
    }
    return ptr1 === s.length
};

// ------------------------------------------------------------------>
//   🤞 2nd Attempt 😎
// ------------------------------------------------------------------>

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let left = 0;
    let right = 0;
    while (left < s.length && right < t.length) {
        if (s[left] === t[right]) {
            left++;
        }
        right++
    }
    return left === s.length

};


// ----------------------------------------------------------------->
//     🔥 1st Attempt ✌️
// ----------------------------------------------------------------->

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Convert t to lowercase
   t = t.toLowerCase();
   
   // Initialize pointers for both strings
   let sPointer = 0;
   let tPointer = 0;
   
   // Iterate over both strings
   while (sPointer < s.length && tPointer < t.length) {
       // If characters match, move pointer for s
       if (s[sPointer] === t[tPointer]) {
           sPointer++;
       }
       // Always move pointer for t
       tPointer++;
   }
   
   // If sPointer has reached the end of s, s is a subsequence of t
   return sPointer === s.length;
};