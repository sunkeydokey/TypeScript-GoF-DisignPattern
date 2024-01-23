import { Animal } from './Animal';

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  sound(): void {
    console.log(`${this.name} 야옹`);
  }
}
