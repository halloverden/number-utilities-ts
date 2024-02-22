import { NinEntity, NinType } from '../types';
import { getIndRangesFromYear } from '../utilities';
import { getMod11ControlDigit, getRandomNumberFromRange, zeroPadding } from '../../../international/utilities';
import { C1_WEIGHTS, C2_WEIGHTS } from '../validators';

/**
 * Returns a random valid nin of the given type for the given date
 *
 * @param date
 * @param type
 */
export function getRandomNinForDate(date: Date, type: NinType = NinType.TYPE_REGULAR_NIN): NinEntity {
  const d = getDate(date.getDate(), type);
  const m = getMonth(date.getMonth() + 1, type);
  const y = date.getFullYear();

  const indRanges = getIndRangesFromYear(y);
  const indRange = indRanges[getRandomNumberFromRange(0, indRanges.length - 1)];
  let c1 = '-';
  let c2 = '-';
  let ninWithoutControlDigits = '';

  do {
    const ind = getRandomNumberFromRange(indRange.indStart, indRange.indEnd);

    ninWithoutControlDigits =
      zeroPadding(d.toString()) +
      zeroPadding(m.toString()) +
      zeroPadding(getYear(y).toString()) +
      zeroPadding(ind.toString(), 3);

    c1 = getMod11ControlDigit(ninWithoutControlDigits, C1_WEIGHTS);
    if ('-' === c1) {
      continue;
    }
    c2 = getMod11ControlDigit(ninWithoutControlDigits + c1, C2_WEIGHTS);
  } while ('-' === c1 || '-' === c2);

  return new NinEntity(ninWithoutControlDigits + c1 + c2);
}

function getDate(date: number, type: NinType): number {
  switch (type) {
    case NinType.TYPE_D_NUMBER:
      return date + 40;
    default:
      return date;
  }
}

function getMonth(month: number, type: NinType): number {
  switch (type) {
    case NinType.TYPE_H_NUMBER:
      return month + 40;
    case NinType.TYPE_NPR_SYNTHETIC:
      return month + 80;
    default:
      return month;
  }
}

function getYear(fullYear: number): number {
  return parseInt(fullYear.toString().substring(2, 4), 10);
}
