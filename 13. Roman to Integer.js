

//? ------------------------------------------------>
//?     👌😁 2nd Attempt - done by myself 
//? ------------------------------------------------>


/**
 * @param {string} s - The input string representing a Roman numeral.
 * @return {number} - The integer value of the Roman numeral.
 */
var romanToInt = function(s) {
    // Define an object to map Roman numerals to their integer values
    const roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    // Initialize the sum to zero
    let sum = 0;

    // Add the value of the first character to the sum
    sum = sum + roman[s[0]];

    // Iterate through the characters of the string starting from the second character
    for (let i = 1; i < s.length; i++) {
        // If the current character is the same as the previous one, add its value to the sum
        if (s[i] == s[i - 1]) {
            sum = sum + roman[s[i]];
            continue;
        }

        // If the value of the current character is less than the value of the previous one,
        // add its value to the sum
        if (roman[s[i]] < roman[s[i - 1]]) {
            sum = sum + roman[s[i]];
        } else {
            // If the value of the current character is greater than or equal to the value of the previous one,
            // subtract twice the value of the previous character and add the value of the current character to the sum
            sum = (sum + roman[s[i]]) - (roman[s[i - 1]] * 2);
        }
    }

    // Return the final sum, which represents the integer value of the Roman numeral
    return sum;
};
