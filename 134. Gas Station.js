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
