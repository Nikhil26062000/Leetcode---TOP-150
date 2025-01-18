
/**
 *  FIRST SOLUTIOIN
 */

class Solution {
    deleteMid(s) {
        // Store the original length of the stack
        let len = s.length;

        // Calculate middle index (1-based, from the top)
        let mid = len - Math.floor((len + 1) / 2) + 1;

        // Helper function for recursion
        const hf = (ci) => {
            // Base case: if the current index matches the middle index
            if (ci === mid) {
                s.pop(); // Remove the middle element
                return;
            }

            // Pop the top element
            let top = s.pop();

            // Recursive call to process the next element
            hf(ci + 1);

            // Push the element back to restore the stack order
            s.push(top);
        };

        // Start the recursion from index 1 (top-based indexing)
        hf(1);
    }
}

/**
 * 
 *  SECOND SOLUTION
 */


class Solution {
    deleteMid(s) {
        // Store the original length of the stack
        var len = s.length;

        // Helper function for recursion
        const hf = (ci) => {
            // Base case: if the current index matches the middle index
            if (ci === Math.floor((len) / 2)) {
                s.pop(); // Remove the middle element
                return;
            }

            // Pop the top element
            let top = s.pop();

            // Recursive call to process the next element
            hf(ci + 1);

            // Push the element back to restore the stack order
            s.push(top);
        };
        
     

    
           hf(0)
     
    }
}


/**
 * 
 *  THIRD SOLUTION
 */


class Solution {
    deleteMid(s) {
        // Store the original length of the stack
        var len = s.length;

        // Helper function for recursion
        const hf = (ci) => {
            // Base case: if the current index matches the middle index
            if (ci === Math.ceil((len +1)/ 2)) { // Adjust for 1-based indexing
                s.pop(); // Remove the middle element
                return;
            }

            // Pop the top element
            let top = s.pop();

            // Recursive call to process the next element
            hf(ci + 1);

            // Push the element back to restore the stack order
            s.push(top);
        };
        
        // Start recursion from index 1
        hf(1);
    }
}