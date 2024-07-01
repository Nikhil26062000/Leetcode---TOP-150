


// --------------------------------------------------------->
//          😎 1st Attempt 🤞
// --------------------------------------------------------->


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;  // 8
    let maxArea = 0;

    while(left < right) {
        let width = right - left;
        let currentHeigth = Math.min(height[left],height[right])
        let currentArea = width * currentHeigth
        maxArea = Math.max(maxArea,currentArea);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;

};
