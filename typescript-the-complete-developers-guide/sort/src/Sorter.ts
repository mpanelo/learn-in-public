interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public sortable: Sortable) {}

  public sort(): void {
    const { length } = this.sortable;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.sortable.compare(j, j + 1)) {
          this.sortable.swap(j, j + 1);
        }
      }
    }
  }
}
