export default class LinkedListNode {
  constructor(data) {
    // value property represented by this node
    // constructs a new instance of this class with data
    this.data = data;
    // property that points to the next node
    // when a new instance is constructed, it has no next branch/instance
    this.next = null;
  }

  addData(data) {
    // takes in data to represent a newly created node
    // which is data, with no next child
    this.addData(new LinkedListNode(data));
  }

  add(node) {
    // uses recursion to add next node
    // takes in a node (created in addData)
    if (!this.next) {
      // if there is no next node (last branch), newly created node arg is the next/last node, data
      this.next = node;
    } else {
      // if there is a next node, pass the node to the function again, add the node arg when there is no next node
      this.next.add(node);
    }
  }

  getList() {
    // returns a string of values in order
    // return data: A > B > C > ... 'A B C ...'
    // check if there is a next node
    // if theres not, return this data and next data
    if (!this.next) return this.data;
    return `${this.data} ${this.next.getList()}`;
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
// root.remove(1);
// console.log(root.getList()); // 'A C D E'
