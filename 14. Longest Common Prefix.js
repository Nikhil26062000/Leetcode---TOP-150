
//? ------------------------------------------------------------->
//?      👌  2nd Attempt 🥰
//? ------------------------------------------------------------->


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return ""
    if(strs.length!=0 && strs[0].length==0) return ""
    
    let prefix = ""
    for(let i=0;i<strs[0].length;i++){
      let char = strs[0][i]
      for(let j=1;j<strs.length;j++){
          if(char != strs[j][i] || i>=strs[j].length){
              return prefix
          }
  
      }
      prefix+=char
    }  
    return prefix
  };


//? ------------------------------------------------------------->
//?         😎 1st Attempt 🔥
//? ------------------------------------------------------------->

/**
 * @param {string[]} strs
 * @return {string}
 */var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // Handle empty array case
    
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
