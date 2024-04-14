/**
 * @param {string} s
 * @return {number}
 */

var scoreOfString = function(s) {
    let sum=0;
    let res= []
    for(let i=0;i<s.length;i++){
        res.push(s[i].charCodeAt(0))
    }
    
    for(let i=0;i<res.length-1;i++){
        sum+=Math.abs(res[i]-res[i+1])
    }
    return sum
};
