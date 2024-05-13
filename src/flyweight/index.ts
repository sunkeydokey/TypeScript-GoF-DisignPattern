import DigitFactory from './DigitFactory';
import Number from './Number';

const factory = new DigitFactory();

const target = document.querySelector('#tmp');

let value = 434331;

setInterval(() => {
  const number = new Number(factory, value++);

  number.put(target);
}, 100);

/*
  Fly weight 패턴은 동일한 객체를 여러 번 생성하지 않고
  미리 생성해 두고 공유해 사용할 수 있음

  미리 생성해둔 객체는 공유의 개념으로 사용되므로
  공유할 속성과 공유하지 않을 속성을 구분하여 설계할 필요가 있음
*/
