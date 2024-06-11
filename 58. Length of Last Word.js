

//? ------------------------------------------------->
//?     😎 2nd Attempt : Done by me 😁
//? ------------------------------------------------->

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    s = s.split(" ")
    return s[s.length-1].length
};

//? ------------------------------------------------->
//?    🥰 1st Attempt 🔥
//? ------------------------------------------------->

var lengthOfLastWord = function(s) {
    s = s.trim().split(" ");
    let l = s.length;
    while (l > 0) {
        if (s[l - 1] !== "") {
            return s[l - 1].length;
        }
        l--;
    }
};
