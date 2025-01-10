

/**
 * ! 1st Attempt
 */

class Solution {
    printNos(n) {
        // Helper function to build the output recursively
        const buildOutput = (num) => {
            if (num === 1) {
                return "1";
            }
            return buildOutput(num - 1) + " " + num;
        };

        // Output the result at once
        console.log(buildOutput(n));
    }
}

/**
 * 
 * 2nd Attempt
 * done by myself
 * resursion approach
 * 
 */
class Solution {
    printNos(n) {
        let arr = []
        const func = (val,n) =>{
            if(val>n) return
            
            arr.push(val)
            func(val+1,n)
        }
        
        func(1,n)
        console.log(arr.join(" "))
    
    }
}