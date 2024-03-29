import { validateNin } from '../validators';
import { NinType } from './nin-type';
import {
  isDNumberPattern,
  isHNumberPattern,
  isNprSyntheticNinPattern,
  isMaleNinPattern as imnp,
  isFemaleNinPattern as ifnp
} from '../functions';

export class NinEntity {
  constructor(private _nin: string) {
    if (!validateNin(this._nin)) {
      throw new Error('Invalid nin');
    }
  }

  private _type?: NinType;

  get type(): NinType {
    this.isRegularNin();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._type!;
  }

  get nin(): string {
    return this._nin;
  }

  isRegularNin(): boolean {
    if (
      this._type === NinType.TYPE_REGULAR_NIN ||
      (!this.isDNumber() && !this.isHNumber() && !this.isNprSyntheticNin())
    ) {
      this._type = NinType.TYPE_REGULAR_NIN;
      return true;
    }
    return false;
  }

  isDNumber(): boolean {
    if (this._type === NinType.TYPE_D_NUMBER || isDNumberPattern(this._nin)) {
      this._type = NinType.TYPE_D_NUMBER;
      return true;
    }
    return false;
  }

  isHNumber(): boolean {
    if (this._type === NinType.TYPE_H_NUMBER || isHNumberPattern(this._nin)) {
      this._type = NinType.TYPE_H_NUMBER;
      return true;
    }
    return false;
  }

  isNprSyntheticNin(): boolean {
    if (this._type === NinType.TYPE_NPR_SYNTHETIC || isNprSyntheticNinPattern(this._nin)) {
      this._type = NinType.TYPE_NPR_SYNTHETIC;
      return true;
    }
    return false;
  }

  isMaleNinPattern() {
    return imnp(this._nin);
  }

  isFemaleNinPattern() {
    return ifnp(this._nin);
  }
}
