import { Display } from './Display';

export class Draft {
  constructor(
    private title: string,
    private author: string,
    private content: Array<string>
  ) {}

  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getContent() {
    return this.content;
  }

  print(display: Display): void {
    display.title(this);
    display.author(this);
    display.content(this);
  }
}
