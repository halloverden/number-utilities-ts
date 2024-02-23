import {
  getDefaultMod11WeightsForLength,
  getLuhnControlDigit,
  getMod11ControlDigit
} from '../../../international/utilities';

/**
 * Validates the given KID number
 *
 * @param kidNumber
 *
 * @return boolean
 */
export function validateKidNumber(kidNumber: string): boolean {
  const controlDigit = kidNumber.charAt(kidNumber.length - 1);
  const kidWithoutControlDigit = kidNumber.substring(0, kidNumber.length - 1);
  const isMod11Compatible =
    controlDigit ===
    getMod11ControlDigit(kidWithoutControlDigit, getDefaultMod11WeightsForLength(kidWithoutControlDigit.length));
  const isLuhnCompatible = parseInt(controlDigit, 10) === getLuhnControlDigit(kidWithoutControlDigit);

  return isMod11Compatible || isLuhnCompatible;
}
