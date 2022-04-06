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

  findPerson(name) {
    // takes in a name string
    // checks if name === this.value (person.name)
    // if so: return this.person (the whole obj)
    // if not: is name < or > this.value

    // if less than (this.left)
    // repeat: this.left.findPerson(name)
    // else null

    // if greater than (this.right)
    // repeat: this.right.findPerson(name)
    // else null

    if (name === this.value) {
      return this.person;
    } 
    if (name < this.value) {
        this.left.findPerson(name);
      } else {
        if (name > this.value) {
          this.right.findPerson(name);
        }
      }
    }
  }
  //
}

const person1 = new PersonTreeNode({
  name: 'Nelson',
  phone: '503-555-5555',
  address: '123 Naito',
});

const person2 = new PersonTreeNode({
  name: 'Carrey',
  phone: '83292829',
  address: 'ndu3h3u',
});

person1.add(person2);

console.log(person1);
console.log(person1.findPerson('Nelson'));
console.log(person1.findPerson('Carrey'));
