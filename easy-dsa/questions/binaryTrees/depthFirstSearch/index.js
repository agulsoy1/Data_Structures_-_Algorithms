/** Depth First Search **
 *
 * Return the depth first values of the given binary tree in
 * an array.
 *
 */

const depthFirstSearch = (root) => {
  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

module.exports = depthFirstSearch;
