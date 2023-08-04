import { getDefaultMod11WeightsForLength, getMod11ControlDigit } from '../../../international/utilities';

/**
 * Validates the given account number
 *
 * @param accountNumber
 *
 * @return boolean
 */
export function validateAccountNumber(accountNumber: string): boolean {
  if (!/\d{11}|\d{4}\.\d{2}\.\d{5}/.test(accountNumber)) {
    return false;
  }

  accountNumber = accountNumber.toString().replace(/\./g, '');
  const weights = getDefaultMod11WeightsForLength(accountNumber.length - 1);

  return (
    getMod11ControlDigit(accountNumber.substring(0, accountNumber.length - 1), weights) ===
    accountNumber.substring(accountNumber.length - 1, accountNumber.length)
  );
}
