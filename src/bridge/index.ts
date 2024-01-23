import { CaptionDisplay } from './CaptionDisplay';
import { CharacterCounter } from './CharacterCounter';
import { Draft } from './Draft';
import { SimpleDisplay } from './SimpleDisplay';

const title = 'Bridge pattern';
const author = 'sunkeydokey';
const content = [
  '큰 클래스 또는 밀접하게 관련된 클래스들의 집합을 두 개의 개별 계층구조​(추상화 및 구현)​로 나눈다.',
  '개별 계층구조를 각각 독립적으로 개발한다.',
];

const draft = new Draft(title, author, content);

const simpleDisplay = new SimpleDisplay();

const captionDisplay = new CaptionDisplay();

console.log('SimpleDisplay');
draft.print(simpleDisplay);
console.log('CaptionDisplay');
draft.print(captionDisplay);

const characterCounter = new CharacterCounter(title, author, content);
console.log('characterCounter');
characterCounter.print(captionDisplay);

console.log(characterCounter.getCharacterCount());

/*
Bridge 패턴은 기능 계층과 구현 계층을 분리함

새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써
복잡도를 효과적으로 낮출 수 있음

기능 계층과 구현 계층은 서로 위임을 통해서 통신함

기능 계층과 구현 계층을 분리함으로써 클래스들 간의 관계를 단순하게 유지시켜줌
*/
