
/**
 * ! 1st Attempt
 */

class Solution{
    printTillN(n){
        //code here
        
        const fun = (n) =>{
            if(n===1){
                return "1"
            }
            return fun(n-1) + " " + n
        }
        console.log(fun(n))
    }

}