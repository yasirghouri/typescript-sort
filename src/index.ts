import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([5, 2, 8, 1, -9, 100]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("zars");
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();

console.log(charactersCollection.data);
