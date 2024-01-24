import { Item } from './Item';

export abstract class Decorator extends Item {
  constructor(protected targetItem: Item) {
    super();
  }
}
