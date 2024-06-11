

//? ----------------------------------------------------------------------------->
//?    🔥 3rd Attempt 😅 : Allmost done by myself but had some minor mistakes
//? ----------------------------------------------------------------------------->

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let str = ""
    let i = 0;
    while (num > 0) {
        if (values[i] <= num) {
            str += symbols[i]
            num = num - values[i]
        } else {
            i++
        }
    }
    return str;
};



//? -------------------------------------------------->
//?     🤞 2nd Attempt 🥰
//? -------------------------------------------------->

/**
 * Convert an integer to a Roman numeral.
 * @param {number} num - The input integer to convert.
 * @return {string} - The Roman numeral representation of the input integer.
 */
var intToRoman = function(num) {
    // Arrays to store the values and corresponding Roman numerals
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    // Result string to store the Roman numeral representation
    let result = '';
  
    // Iterate through the values and numerals arrays
    for (let i = 0; i < values.length; i++) {
        // While the input number is greater than or equal to the current value
        while (num >= values[i]) {
            // Append the corresponding numeral to the result string
            result += numerals[i];
            // Subtract the current value from the input number
            num -= values[i];
        }
    }
    
    // Return the final Roman numeral representation
    return result;
};




//? ---------------------------------------------------->
//?    👌 1st Attempt 🔥
//? ---------------------------------------------------->

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   let result = '';
 
   for (let i = 0; i < values.length; i++) {
       while (num >= values[i]) {
           result += numerals[i];
           num -= values[i];
       }
   }
   
   return result;
};