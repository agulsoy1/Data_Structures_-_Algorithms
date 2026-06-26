/** Breadth First Search **
 *
 * Return the breadth first values of the given binary tree in
 * an array.
 *
 */

const breadthFirstSearch = (root) => {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  return result;
};

module.exports = breadthFirstSearch;
