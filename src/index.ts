import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([5, 2, 8, 1, -9, 100]);
numbersCollection.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("zaRs");
charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(1);
linkedList.add(7);
linkedList.add(-8);
linkedList.sort();

linkedList.print();
