
// ------------------------------------------------------------------->
// 😎 My own logic 🤞
// ------------------------------------------------------------------->

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        let ind = numbers.indexOf(complement, i + 1); // start search from the next index
        if (ind !== -1) {
            //The condition if (ind !== -1) is used to check if the complement exists in the array. The indexOf method returns -1 if the element is not found. By ensuring that ind is not -1, we confirm that the complement exists and its index is valid.
            return [i + 1, ind + 1];
        }
    }
};



// ------------------------------------------------------------------->
//              😎 1st Attempt 🥰
// ------------------------------------------------------------------->

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // this line should never be reached since the problem guarantees one solution
};
