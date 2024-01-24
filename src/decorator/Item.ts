export abstract class Item {
  abstract getLinesCount(): number;
  abstract getLength(index: number): number;
  abstract getMaxLength(): number;
  abstract getString(index: number): string;

  print(dom: HTMLElement): void {
    const result = [];
    const lineCounts = this.getLinesCount();

    for (let i = 0; i < lineCounts; i++) {
      const string = this.getString(i);
      result.push(string);
    }

    dom.innerHTML = result.join('\n');
  }
}
