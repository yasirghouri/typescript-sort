import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([5, 2, 8, 1, -9, 100]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
