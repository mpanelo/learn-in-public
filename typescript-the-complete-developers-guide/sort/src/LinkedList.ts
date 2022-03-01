export class LinkedList {
  head: Node | null = null;

  compare(leftIndex: number, rightIndex: number): boolean {
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }
    const node1 = this.at(leftIndex);
    const node2 = this.at(rightIndex);

    return node1.data > node2.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const node1 = this.at(leftIndex);
    const node2 = this.at(rightIndex);

    const temp = node1.data;
    node1.data = node2.data;
    node2.data = temp;
  }

  add(data: number): void {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;
  }

  at(target: number): Node {
    let curr = this.head;
    let i = 0;

    while (curr && i !== target) {
      curr = curr.next;
      i++;
    }

    if (!curr) {
      throw new Error("Index out of bounds!");
    }

    return curr;
  }

  get length(): number {
    let i = 0;
    let curr = this.head;
    while (curr) {
      i += 1;
      curr = curr.next;
    }
    return i;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  print(): void {
    let curr = this.head;
    const numbers = [];
    while (curr) {
      numbers.push(curr.data);
      curr = curr.next;
    }

    console.log(numbers);
  }
}

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}
