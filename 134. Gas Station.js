/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var count = 0;
      var cf = 0;
      var start = 0;
      for (var i = 0; i < gas.length * 2; i++) {
          cf += gas[i % gas.length] - cost[i % gas.length];
          if (cf < 0) {
              start = i + 1;
              count = 0;
              cf = 0;
          } else {
              count++;
          }
          if (count === gas.length) {
              return start % gas.length;
          }
      }
      return -1;
      
  };