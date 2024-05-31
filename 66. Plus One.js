
// ==========================================================================>
//   1st Attempt - Almost done by my 😁 but need some help from GPT 😜
// ==========================================================================>

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let str = "";
let res = [];

// Concatenate the digits array to form a string
for (let i = 0; i < digits.length; i++) {
    str += digits[i].toString();
}

// Parse the string to an integer, increment by 1, and convert back to string
let number = (BigInt(str) + 1n).toString(); // Using BigInt to handle large numbers

// Convert the string back to an array of digits
for (let i = 0; i < number.length; i++) {
    res.push(BigInt(number[i]));
}

return res;
};