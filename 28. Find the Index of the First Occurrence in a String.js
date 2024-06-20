//? ------------------------------------------------------------->
//?    ✌️ 2nd Attempt 🔥
//? ------------------------------------------------------------->

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let flag = false
  for (let i = 0; i < haystack.length; i++) {
      if (needle[0] == haystack[i]) {
          let temp = haystack.substring(i, i + needle.length)
          if (temp == needle) {
              return i
          }
      }
  }
  return -1
};

//? ------------------------------------------------>
//?    😎 1st Attempt 😜
//? ------------------------------------------------>

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let temp = haystack.substring(i, needle.length + i);
      if (temp == needle) return i;
    }
  }
  return -1;
};
