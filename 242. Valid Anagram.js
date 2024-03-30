/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj1 = {}
    for(let i=0;i<s.length;i++){
        if(!obj1[s[i]]){
            obj1[s[i]] = 1
        }else{
            obj1[s[i]] = obj1[s[i]] + 1
        }
    }
    for(let i=0;i<t.length;i++){
        if(obj1[t[i]]){
            obj1[t[i]] = obj1[t[i]] -1
        }else{
            return false
        }
    }for (let key in obj1) {
        if (obj1[key] !== 0) {
            return false;
        }
    }
    return true
};