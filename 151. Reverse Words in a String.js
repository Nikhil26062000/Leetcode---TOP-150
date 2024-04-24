/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    s = s.split(" ")
    let res = ""
    for(let i=s.length-1;i>=0;i--){
        if(s[i]==""){
            
            continue
        }
        res+=s[i] + " "
    }
    return res.trim()
};