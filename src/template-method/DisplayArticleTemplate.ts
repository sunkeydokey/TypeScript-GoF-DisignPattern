import { Article } from './Article';

export abstract class DisplayArticleTemplate {
  constructor(protected article: Article) {}

  public readonly displayHtml = () => {
    return `
      ${this.titleHtml()}
      ${this.contentHtml()} 
      ${this.footerHtml()}
    `;
  };

  protected abstract titleHtml(): string;
  protected abstract contentHtml(): string;
  protected abstract footerHtml(): string;
}
