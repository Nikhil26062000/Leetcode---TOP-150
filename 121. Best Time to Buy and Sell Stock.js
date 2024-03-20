/**
 * @param {number[]} prices
 * @return {number}
 */

//prices = [7,1,5,3,6,4]

var maxProfit = function (prices) {
    let minPrice = Infinity;// 7 ,1,1,1,1,1
    let maxProfit = 0;//0 ,0,4,4,5,5
    
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;

};

//Explaination : in only one loop our aim is to find which is the min price in the array so at first we assume that minPrie is Infinite and we comapre every time the price with minPrice and updated the minPrice and in second line we use the min price and find difference with actual price i.e  prices[i] - minPrice and then find the max between privious maxProfit and current maxProfit