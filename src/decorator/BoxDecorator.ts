import { Decorator } from './Decorator';
import { Item } from './Item';

export class BoxDecorator extends Decorator {
  constructor(targetItem: Item) {
    super(targetItem);
  }

  getLinesCount(): number {
    return this.targetItem.getLinesCount() + 2;
  }

  getLength(index: number): number {
    return this.targetItem.getLength(index) + 2;
  }

  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2;
  }

  getString(index: number): string {
    const maxWidth = this.getMaxLength();
    if (index === 0 || index === this.getLinesCount() - 1) {
      return `<span style="color: yellow">+${'-'.repeat(maxWidth - 2)}+</span>`;
    } else {
      return (
        `<span style="color: yellow">|</span>` +
        `${this.targetItem.getString(index - 1)}${' '.repeat(
          maxWidth - this.getLength(index - 1)
        )}` +
        `<span style="color: yellow">|</span>`
      );
    }
  }
}
