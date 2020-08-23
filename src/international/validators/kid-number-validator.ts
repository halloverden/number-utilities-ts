import { getLuhnControlDigit, getMod11ControlDigit } from '@international/utilities';

export function validateKidNumber(kidNumber: string) {
  const controlDigit = kidNumber.charAt(kidNumber.length - 1);
  const kidWithoutControlDigit = kidNumber.substr(0, kidNumber.length - 1);
  const isMod11Compatible = parseInt(controlDigit, 10) === getMod11ControlDigit(kidWithoutControlDigit);
  const isLuhnCompatible = parseInt(controlDigit, 10) === getLuhnControlDigit(kidWithoutControlDigit);

  return isMod11Compatible || isLuhnCompatible;
}
