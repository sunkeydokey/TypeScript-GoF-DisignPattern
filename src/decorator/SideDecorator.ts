import { Decorator } from './Decorator';
import { Item } from './Item';

export class SideDecorator extends Decorator {
  constructor(targetItem: Item, private ch: string) {
    super(targetItem);
  }

  getLinesCount(): number {
    return this.targetItem.getLinesCount();
  }

  getLength(index: number): number {
    return this.targetItem.getLength(index) + this.ch.length * 2;
  }

  getMaxLength(): number {
    return this.targetItem.getMaxLength() + this.ch.length * 2;
  }

  getString(index: number): string {
    return (
      `<span style="color: gray">${this.ch}</span>` +
      `${this.targetItem.getString(index)}</span>` +
      `<span style="color: gray">${this.ch}</span>`
    );
  }
}
