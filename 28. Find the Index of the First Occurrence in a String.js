/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[0]){
          let temp = haystack.substring(i,needle.length+i)
          if(temp==needle) return i
        }
    }
    return -1
};