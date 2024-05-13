import Digit from './Digit';

export default class DigitFactory {
  private pool: Array<Digit | null> = Array(10).fill(null);

  getDigit(n: number): Digit {
    if (!this.pool[n]) this.pool[n] = new Digit(`./data/${n}.json`);
    console.log(this.pool[n]);
    return this.pool[n];
  }
}
