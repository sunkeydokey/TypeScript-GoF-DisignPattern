import { Item } from './Item';

export class Strings extends Item {
  private data: Array<string> = [];

  constructor() {
    super();
  }

  add(string: string): void {
    this.data.push(string);
  }

  getLinesCount(): number {
    return this.data.length;
  }

  getLength(index: number): number {
    return this.data[index].length;
  }

  getMaxLength(): number {
    let maxLength = 0;
    this.data.forEach((item) => {
      if (item.length > maxLength) maxLength = item.length;
    });

    return maxLength;
  }

  getString(index: number): string {
    return this.data[index];
  }
}
