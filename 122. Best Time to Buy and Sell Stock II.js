
// -------------------- 2nd attempt ----------------

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]<prices[i+1]){
            profit+=(prices[i+1]-prices[i])
        }
    }
    return profit
};


// ------------------ 1st attempt ------------------

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]<prices[i+1]){
            profit+=(prices[i+1]-prices[i])
        }
    }
    return profit
};


//* ref : https://www.youtube.com/watch?v=Q7v239y-Tik