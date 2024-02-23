import { NinList } from '../types';
import { getIndRangesFromYear } from '../utilities';
import { getDefaultMod11WeightsForLength, getMod11ControlDigit, zeroPadding } from '../../../international/utilities';
import { C1_WEIGHTS, validateNin } from '../validators';
import { isFemaleNinPattern } from './is-female-nin-pattern';
import { isMaleNinPattern } from './is-male-nin-pattern';

/**
 * Generates and returns list of every possible valid nin for the given date
 *
 * @param date
 *
 * @return NinList
 */
export function generateEveryNinForDate(date: Date): NinList {
  const ninList: NinList = new NinList();
  const indRanges = getIndRangesFromYear(date.getFullYear());

  const ninDate =
    zeroPadding(date.getDate().toString()) +
    zeroPadding((date.getMonth() + 1).toString()) +
    date.getFullYear().toString().substring(2, 4);

  for (const indRange of indRanges) {
    let currentInd = indRange.indStart;

    while (currentInd <= indRange.indEnd) {
      const zeroPaddedCurrentInd = zeroPadding(currentInd.toString(), 3);
      const currentNinStart = ninDate + zeroPaddedCurrentInd;

      const c1 = getMod11ControlDigit(currentNinStart, C1_WEIGHTS);
      if ('-' === c1) {
        currentInd++;
        continue;
      }

      const currentNinStartWithC1 = currentNinStart + c1;

      const c2 = getMod11ControlDigit(
        currentNinStartWithC1,
        getDefaultMod11WeightsForLength(currentNinStartWithC1.length)
      );

      if ('-' === c2) {
        currentInd++;
        continue;
      }

      const nin = currentNinStartWithC1 + c2;

      if (validateNin(nin)) {
        if (isFemaleNinPattern(nin)) {
          ninList.addFemale(nin);
        } else if (isMaleNinPattern(nin)) {
          ninList.addMale(nin);
        }
      }

      currentInd++;
    }
  }

  return ninList;
}
