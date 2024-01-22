import { Article } from './Article';
import { DisplayArticleTemplate } from './DisplayArticleTemplate';

export class EditableDisplayArticle extends DisplayArticleTemplate {
  protected titleHtml(): string {
    return `
      <div>
        <span>제목</span>
        <input type="text" value=${this.article.getTitle()} />
      </div>
    `;
  }

  protected contentHtml(): string {
    const items = this.article.getContent().map((item) => `${item}\n`);
    return `
    <div>
      <span>내용</span><br/>
      <textarea cols="50" rows="5">${items.join('')}</textarea>
    </div>
  `;
  }

  protected footerHtml(): string {
    return `
    <div>
      <span>글쓴이</span>
      <input type="text" value=${this.article.getFooter()} />
    </div>
  `;
  }

  constructor(article: Article) {
    super(article);
  }
}
