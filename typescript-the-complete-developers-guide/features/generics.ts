class GenericCollection<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const gec = new GenericCollection(["1", "@", "R"]);
console.log(gec.get(1));

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything([1, 2, 3, 4]);
printAnything(["1", "E", "R", "T"]);
