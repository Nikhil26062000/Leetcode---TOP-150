

//? ------------------------------------------------>
//?     👌😁 2nd Attempt - done by myself 
//? ------------------------------------------------>

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1
    }
   let sum = 0;
   sum = sum + roman[s[0]];
   for( let i = 1;i<s.length;i++){
    if(s[i] == s[i-1]) {
        sum = sum + roman[s[i]]
        continue;
    }
    if(roman[s[i]] < roman[s[i-1]]){
        sum = sum + roman[s[i]]
    }else{
        sum = (sum + roman[s[i]]) -(roman[s[i-1]] * 2)
    }
   }
   return sum;

};