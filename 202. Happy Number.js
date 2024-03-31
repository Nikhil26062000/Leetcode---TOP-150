/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let temp2 = n;
   
    var sum = 0;
   // we are putting 4 because 4 is unhappy number and if nummber is 4 it will be infinte loop so we are confirming that it is not infinte loop
    while (temp2 != 1 && temp2 != 4) {
        let temp = temp2;
        temp = temp.toString().split("");
        sum = 0;
        for (let i of temp) {
            sum += parseInt(i) * parseInt(i);
        }
        temp2 = sum;
    }
    
    return temp2 == 1;
};
