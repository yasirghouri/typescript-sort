import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([5, 2, 8, 1, -9, 100]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("zaRs");
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(1);
linkedList.add(7);
linkedList.add(-8);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();

linkedList.print();
