export class SsnListEntity {
  private readonly _female: string[] = [];
  private readonly _male: string[] = [];

  get female(): string[] {
    return this._female;
  }

  public addFemale(ssn: string): SsnListEntity {
    if (!this._female.includes(ssn)) {
      this._female.push(ssn);
    }

    return this;
  }

  public addMale(ssn: string): SsnListEntity {
    if (!this._male.includes(ssn)) {
      this._male.push(ssn);
    }

    return this;
  }

  get male(): string[] {
    return this._male;
  }
}
