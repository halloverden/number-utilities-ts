import { getDefaultMod11WeightsForLength, getMod11ControlDigit } from '../../../international/utilities';
import { isNinPattern } from '../functions';
import { getIndRangesFromYear, getNinIndividualNumberRangeMappingTypesFromInd, getYearFromNin } from '../utilities';
import { IndRange } from '../types';

export const C1_WEIGHTS = [3, 7, 6, 1, 8, 9, 4, 5, 2];
export const C2_WEIGHTS = getDefaultMod11WeightsForLength(10);

/**
 * Validates the given nin
 *
 * @param nin
 */
export function validateNin(nin: string): boolean {
  if (!isNinPattern(nin)) {
    return false;
  }

  const c1 = nin.substring(9, 10);
  const c2 = nin.substring(10, 11);

  if (getMod11ControlDigit(nin.substring(0, nin.length - 2), C1_WEIGHTS) !== c1) {
    return false;
  }

  if (getMod11ControlDigit(nin.substring(0, nin.length - 1), C2_WEIGHTS) !== c2) {
    return false;
  }

  const rangeMappings = getNinIndividualNumberRangeMappingTypesFromInd(parseInt(nin.substring(6, 9), 10));
  const year = getYearFromNin(nin);
  const indRanges = getIndRangesFromYear(year);
  let validInd = false;

  const hasIndRange = (ir: IndRange[], indStart: number, indEnd: number): boolean => {
    for (const r of ir) {
      if (r.indStart === indStart && r.indEnd === indEnd) {
        return true;
      }
    }

    return false;
  };

  for (const m of rangeMappings) {
    if (hasIndRange(indRanges, m.indStart, m.indEnd)) {
      validInd = true;
    }
  }

  return validInd;
}
