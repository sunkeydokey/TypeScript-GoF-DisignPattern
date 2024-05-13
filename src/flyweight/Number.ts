import DigitFactory from './DigitFactory';

export default class Number {
  constructor(private factory: DigitFactory, private num: number) {}

  put(dom: Element) {
    const strNum = this.num.toString();
    const { length } = strNum;

    dom.innerHTML = '';
    for (let i = 0; i < length; i++) {
      const div = document.createElement('div');
      this.factory.getDigit(parseInt(strNum[i])).put(div);
      dom.appendChild(div);
    }
  }
}
