import { SsnListEntity } from '@norway/types';
import { generateFirstSsnControlDigit, getIndRangeFromYear } from '@norway/utilities';
import { validateSsn } from '@norway/validators';
import { getMod11ControlDigit, zeroPadding } from '@international/utilities';

/**
 * Generates and returns list of every possible valid ssn for the given date
 *
 * @param date
 *
 * @return SsnListEntity | null
 */
export function generateEverySsnForDate(date: Date): SsnListEntity | null {
  const ssnList: SsnListEntity = new SsnListEntity();
  // tslint:disable:no-console
  const indRange = getIndRangeFromYear(date.getUTCFullYear());

  if (!indRange) {
    return null;
  }

  let currentInd = indRange.indStart;
  const ssnDate =
    zeroPadding(date.getDate().toString()) +
    zeroPadding((date.getUTCMonth() + 1).toString()) +
    date.getUTCFullYear().toString().substr(2, 2);

  while (currentInd <= indRange.indEnd) {
    const usedFirstControlDigits: number[] = [];
    const zeroPaddedCurrentInd = zeroPadding(currentInd.toString(), 3);
    let c1 = generateFirstSsnControlDigit(ssnDate + zeroPaddedCurrentInd, usedFirstControlDigits);

    while (null !== c1) {
      usedFirstControlDigits.push(c1);

      const c2 = getMod11ControlDigit(ssnDate + zeroPaddedCurrentInd + c1);

      if (null === c2) {
        currentInd++;
        break;
      }

      const controlDigits = c1.toString() + c2.toString();

      const ssn = ssnDate + zeroPaddedCurrentInd + controlDigits;

      if (validateSsn(ssn)) {
        if (parseInt(zeroPaddedCurrentInd.charAt(1), 10) % 2 === 0) {
          ssnList.addFemale(ssn);
        } else {
          ssnList.addMale(ssn);
        }
      }

      c1 = generateFirstSsnControlDigit(ssnDate + zeroPaddedCurrentInd, usedFirstControlDigits);
    }

    currentInd++;
  }

  return ssnList;
}
