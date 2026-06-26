const breadthFirstSearch = require("./index");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

test("breadth first search on a tree", () => {
  const A = new Node("A");
  const B = new Node("B");
  const C = new Node("C");
  const D = new Node("D");
  const E = new Node("E");
  const F = new Node("F");

  A.left = B;
  A.right = C;
  B.left = D;
  B.right = E;
  C.left = F;

  expect(breadthFirstSearch(A)).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
});

test("breadth first search on a single node", () => {
  const A = new Node("A");
  expect(breadthFirstSearch(A)).toStrictEqual(["A"]);
});

test("breadth first search on null root", () => {
  expect(breadthFirstSearch(null)).toStrictEqual([]);
});

test("breadth first search on a skewed tree", () => {
  const A = new Node("A");
  const B = new Node("B");
  const C = new Node("C");
  const D = new Node("D");

  A.right = B;
  B.right = C;
  C.right = D;

  expect(breadthFirstSearch(A)).toStrictEqual(["A", "B", "C", "D"]);
});