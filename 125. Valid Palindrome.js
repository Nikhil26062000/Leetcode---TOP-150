

// ---------------------------------------------------------->
//        ✌️ 2nd Attempt 🔥
// ---------------------------------------------------------->

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            res += char;
        }
    }

    return res === res.split("").reverse().join("");
};


//! Below code will not work because :


// var isPalindrome = function(s) {
//     let res=""
//     for(let i=0;i<s.length;i++){        
//         if("a".charCodeAt(0) <= s[i].toLowerCase().charCodeAt(0) <= "z".charCodeAt(0)){
//             res+=s[i].toLowerCase()
//         }else{
//             continue
//         }
//     }
//     return res.split("").reverse().join("") == res
// };

/** Explaination :

Let's do a dry run of the condition if ("a".charCodeAt(0) <= s[i].toLowerCase().charCodeAt(0) <= "z".charCodeAt(0)) with an example to understand why it doesn't work as intended.

Example String: "A man, a plan, a canal: Panama"
Let's focus on the first few characters to see the evaluation of the condition step-by-step:

Character: 'A'

s[i] is 'A'.
s[i].toLowerCase() is 'a'.
"a".charCodeAt(0) is 97.
'a'.charCodeAt(0) is 97.
"z".charCodeAt(0) is 122.
Condition: 97 <= 97 <= 122
This is actually evaluated in two steps:
First: 97 <= 97 is true.
Second: true <= 122 is true in JavaScript because true is implicitly converted to 1, and 1 <= 122 is true.
Although this seems to work correctly for 'A', it works incorrectly for non-alphanumeric characters. Let's see an example with a comma:

Character: ','

s[i] is ','.
s[i].toLowerCase() is ',' (no change).
"a".charCodeAt(0) is 97.
','.charCodeAt(0) is 44.
"z".charCodeAt(0) is 122.
Condition: 97 <= 44 <= 122
This is evaluated in two steps:
First: 97 <= 44 is false.
Second: false <= 122 is true because false is implicitly converted to 0, and 0 <= 122 is true.
This causes the comma to be incorrectly included.
 */




//? --------------------------------------------------------------->
//?    🔥 1st Attempt 😎
//? --------------------------------------------------------------->


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