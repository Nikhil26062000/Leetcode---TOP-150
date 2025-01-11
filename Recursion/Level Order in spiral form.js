
/**
 * 
 * 1st Attempt
 * solved by Chatgpt
 * 
 */

// User function Template for javascript
/**
 * @param {Node} root
 * @returns {number[]}
 */
 class Solution {
    // Function to return the spiral order traversal of a tree.
    findSpiral(root) {
        if (!root) return [];

        const result = [];

        // Recursive helper function
        const traverse = (node, level) => {
            if (!node) return;

            // Add new level to result if it doesn't exist
            if (result.length <= level) {
                result.push([]);
            }

            // For even levels, add node at the end; for odd levels, add at the beginning
            if (level % 2 === 0) {
                result[level].unshift(node.data); // Right to left
            } else {
                result[level].push(node.data); // Left to right
            }

            // Recur for left and right children
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        };

        // Start recursive traversal from root at level 0
        traverse(root, 0);

        // Flatten the result array
        return result.flat();
    }
}