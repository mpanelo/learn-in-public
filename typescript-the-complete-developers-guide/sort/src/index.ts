import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersColection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// TODO make Sorter an abstract class and sort() a common method for children classes
const sorter = new Sorter(new NumbersColection([10000, 3, -5, 0]));
sorter.sort();
console.log(sorter.sortable);

sorter.sortable = new CharactersCollection("Xaaa");
sorter.sort();
console.log(sorter.sortable);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(66);
sorter.sortable = linkedList;
sorter.sort();
linkedList.print();
