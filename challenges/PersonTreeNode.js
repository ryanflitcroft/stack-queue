export default class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }

  //
}

const person1 = new PersonTreeNode({
  name: 'Nelson',
  phone: '503-555-5555',
  address: '123 Naito',
});

console.log(person1);
