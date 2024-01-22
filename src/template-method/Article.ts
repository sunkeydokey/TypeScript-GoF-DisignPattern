export class Article {
  constructor(
    private title: string,
    private content: Array<string>,
    private footer: string
  ) {}

  public getTitle(): string {
    return this.title;
  }

  public getContent(): Array<string> {
    return this.content;
  }

  public getFooter(): string {
    return this.footer;
  }
}
