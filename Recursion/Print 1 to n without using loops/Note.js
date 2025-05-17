//! If you're building a string by adding to it repeatedly in a loop or recursion, the time complexity is usually O(n²).

// 🔍 Why?
// Strings are immutable → Every += or str = str + something creates a new string.

// Each time, it copies the entire previous string, which takes time proportional to the current string length.

// So the total time becomes:1 + 2 + 3 + ... + n = O(n²)



//! Better Approach:
// Use an array instead, then join once:

// Pushes are O(1) → total O(n)

// .join() is O(n)

// ✅ Overall: O(n)