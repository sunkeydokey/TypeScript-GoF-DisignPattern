import { Draft } from './Draft';

export class CharacterCounter extends Draft {
  constructor(title: string, author: string, content: Array<string>) {
    super(title, author, content);
  }

  getCharacterCount(): number {
    let count = 0;

    count += super.getTitle().length;
    count += super.getAuthor().length;
    super.getContent().forEach((item) => (count += item.length));

    return count;
  }
}
