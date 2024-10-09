class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
    this.length += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
    this.length += 1;
  }

  size() {
    return this.length
  }

  head() {
    return this.head
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode && currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = null;
      this.tail = currentNode;
    }
    this.length -= 1;
  }

  toString() {
    let result = "";
    let currentNode = this.head;

    while (currentNode) {
      result += `${currentNode.value} -> `
      currentNode = currentNode.nextNode;
    }

    return result;
  }
}

const link = new LinkedList();

link.append(5);
link.append(10);
link.append(15);
link.append(20);
link.pop()
console.log(link.toString())
