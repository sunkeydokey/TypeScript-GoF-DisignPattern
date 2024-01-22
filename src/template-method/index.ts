import { Article } from './Article';
import { EditableDisplayArticle } from './EditableDisplayArticle';
import { SimpleDisplayArticle } from './SimpleDisplayArticle';

const article = new Article(
  '템플릿 메소드 패턴',
  ['디자인', '패턴', 'GoF'],
  'sunkeydokey'
);

const display = new SimpleDisplayArticle(article);
const contentBox = document.querySelector('.content') as HTMLElement;
const checkbox = document.querySelector('.edit-mode') as HTMLElement;
checkbox.addEventListener('change', ({ target }: Event) => {
  const { checked } = target as HTMLInputElement;
  let display;

  if (checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  contentBox.innerHTML = display.displayHtml();
});
contentBox.innerHTML = display.displayHtml();

/* 
Template Method 패턴은 어떤 기능을 구성하는 각 실행 순서를 미리 정하고 각 실행 단계에 대한 구체적인 코드를 재정의할 수 있는 유연성을 제공함
*/
