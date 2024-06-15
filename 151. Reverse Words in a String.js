
//? -------------------------------------------------------------------------------->
//?       😎  2nd Attempt : Done by me 😜
//? -------------------------------------------------------------------------------->


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    s = s.split(" ")
    let res = []
    for(let i=s.length-1;i>=0;i--){
        if(s[i]==""){
            continue
        }else{
            res.push(s[i])
        }
    }
    return res.join(" ")
};





//? ----------------------------------------------->
//?    💖 1st Attempt 🔥
//? ----------------------------------------------->

/**
 * Function to reverse the words in a string.
 * @param {string} s - Input string.
 * @return {string} - String with words reversed.
 */
var reverseWords = function(s) {
    // Trim any leading or trailing white spaces from the input string
    s = s.trim();

    // Split the string into an array of words using space as the delimiter
    s = s.split(" ");

    // Initialize an empty string to store the result
    let res = "";

    // Iterate over the array of words in reverse order
    for (let i = s.length - 1; i >= 0; i--) {
        // If the current word is an empty string, skip it
        if (s[i] == "") {
            continue;
        }
        // Concatenate the current word and a space to the result string
        res += s[i] + " ";
    }

    // Trim any trailing white spaces from the result string and return
    return res.trim();
};
