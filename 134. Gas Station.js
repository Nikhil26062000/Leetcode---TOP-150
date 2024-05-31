

// ----------------2nd Attempt --------------------

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// Solution 1st
var canCompleteCircuit = function (gas, cost) {
    let currentFuel = 0;
    let count = 0;
    let start = 0;
    for (let i=0;i<gas.length*2;i++){
        currentFuel = currentFuel + gas[i % gas.length] - cost[i % gas.length]
        if(currentFuel < 0){
            currentFuel = 0;
            start = i + 1;
            count = 0; 
        }else{
            count++;
        }
        if(count == gas.length) return start
    }
    return -1
};


// Solution 2nd
var canCompleteCircuit = function (gas, cost) {
    let availableGas = 0;
  let totalGas = 0;
  let startStation = 0;

  for (let i = 0; i < gas.length; i++) {
      availableGas += gas[i] - cost[i];  
      // 0 -->  0 + (-2) = -2 ==> 0
      // 1 --> 0 + (2-4) = -2 ==> 0
      // 2 --> 0 + (-2) =  -2 ==> 0
      // 3 --> 0 + (3)  =   3 ==> 3
      // 4 --> 3 + (3) =    6 ==> 6
      totalGas += gas[i] - cost[i];
      // 0 --> 0 + (-2) = -2 
      // 1 --> -2 + (-2) = -4
      // 2 --> -4 + (-2) = -6
      // 3 --> -6 + (3)  = -3
      // 4 --> -3 + (3)  =  0
      if (availableGas < 0) {
          // If availableGas becomes negative, reset it and update startStation to the next station.
          availableGas = 0;
          startStation = i + 1;
      }
  }

  return totalGas >= 0 ? startStation : -1;

};


// ------------------- 1st Attempt ---------------

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // Initialize variables
    var count = 0;        // Counter to keep track of how many stations we have successfully traversed
    var cf = 0;           // Current fuel: to check if we have enough fuel to reach the next station
    var start = 0;        // Starting station index
    // Loop through the stations twice to make sure we cover all possible starting points
    for (var i = 0; i < gas.length * 2; i++) {
        // Calculate the remaining fuel after moving to the next station
        cf += gas[i % gas.length] - cost[i % gas.length];
        // If the remaining fuel is negative, it means we can't reach the next station
        if (cf < 0) {
            // Set the next station as the new potential starting point
            start = i + 1;
            // Reset the counter and the current fuel
            count = 0;
            cf = 0;
        } else {
            // Increment the counter if we can reach the next station
            count++;
        }
        // If we successfully traverse all stations, return the starting station index
        if (count === gas.length) {
            return start % gas.length;
        }
    }
    // If no starting point is found, return -1
    return -1;
};
