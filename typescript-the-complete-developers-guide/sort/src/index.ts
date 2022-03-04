import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersColection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

let collection: Sorter = new NumbersColection([32, -10, -99, 99, 1, 2]);
collection.sort();
console.log(collection);

collection = new CharactersCollection("Xaaa");
collection.sort();
console.log(collection);

const linkedList = new LinkedList();

// Populate Linked List
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(66);

linkedList.sort();

linkedList.print();
