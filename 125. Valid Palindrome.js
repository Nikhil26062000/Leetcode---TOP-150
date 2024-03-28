/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Convert to lowercase and remove non-alphanumeric characters
   const cleanedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
   
   // Check if the cleaned string is equal to its reverse
   return cleanedS === cleanedS.split('').reverse().join('');
};