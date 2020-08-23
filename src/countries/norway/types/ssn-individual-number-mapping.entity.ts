export class SsnIndividualNumberMappingEntity {
  private readonly _fromYear: number;
  private readonly _toYear: number;
  private readonly _indStart: number;
  private readonly _indEnd: number;

  constructor(fromYear: number, toYear: number, indStart: number, indEnd: number) {
    this._fromYear = fromYear;
    this._toYear = toYear;
    this._indStart = indStart;
    this._indEnd = indEnd;
  }

  get fromYear(): number {
    return this._fromYear;
  }

  get toYear(): number {
    return this._toYear;
  }

  get indStart(): number {
    return this._indStart;
  }

  get indEnd(): number {
    return this._indEnd;
  }
}
