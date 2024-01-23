export class Tiger {
  private _name: string | null = null;

  set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }

  roar(): string {
    return '으르렁';
  }
}
