//? ----------------------------------------------------------->
//?         😎 2nd Attempt 😜
//? ----------------------------------------------------------->

var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let rows = [];
  let res = "";
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows[i] = "";
  }

  let cr = 0;
  let gd = false;

  for (let c of s) {
    rows[cr] = rows[cr] + c;
    if (cr == 0 || cr == numRows - 1) {
      gd = !gd;
    }

    cr += gd == true ? 1 : -1;
  }

  for (let str of rows) {
    res += str;
  }

  return res;
};

//? ------------------------------------------------------------>
//?        🔥 1st Attempt 😁
//? ------------------------------------------------------------>

var convert = function (s, numRows) {
  if (numRows === 1) return s; // If numRows is 1, return the original string

  const rows = []; // Array to store characters in each row
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows[i] = ""; // Initialize each row with an empty string
  }

  let currentRow = 0; // Variable to keep track of the current row
  let goingDown = false; // Variable to indicate whether we are moving down or up

  // Iterate through each character in the string
  for (const char of s) {
    rows[currentRow] += char; // Add the character to the current row

    // If we reach the topmost or bottommost row, change the direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Update the currentRow based on the direction
    currentRow += goingDown ? 1 : -1;
  }

  // Concatenate all rows to form the final zigzag pattern
  let result = "";
  for (const row of rows) {
    result += row;
  }

  return result;
};
