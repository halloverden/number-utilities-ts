export class NinList {
  private readonly _female: string[] = [];
  private readonly _male: string[] = [];

  get female(): string[] {
    return this._female;
  }

  get male(): string[] {
    return this._male;
  }

  public addFemale(nin: string): NinList {
    if (!this._female.includes(nin)) {
      this._female.push(nin);
    }

    return this;
  }

  public addMale(nin: string): NinList {
    if (!this._male.includes(nin)) {
      this._male.push(nin);
    }

    return this;
  }
}
