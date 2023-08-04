import { getDefaultMod11WeightsForLength, getMod11ControlDigit } from '../../../international/utilities';

export const ORG_NUMBER_WEIGHTS = getDefaultMod11WeightsForLength(8);

/**
 * Validates the given organization number
 *
 * @param orgNumber
 */
export function validateOrganizationNumber(orgNumber: string): boolean {
  orgNumber = orgNumber.replace(new RegExp(/ /g), '');
  if (!orgNumber || orgNumber.length !== 9) {
    return false;
  }

  return (
    orgNumber.charAt(orgNumber.length - 1) ===
    getMod11ControlDigit(orgNumber.substring(0, orgNumber.length - 1), ORG_NUMBER_WEIGHTS)
  );
}
