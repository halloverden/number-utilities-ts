/**
 * @param ssn
 *
 * @return boolean
 */
export function isDNumber(ssn: string): boolean | null {
  if (ssn.length !== 11) {
    return false;
  }

  return parseInt(ssn.charAt(0), 10) >= 4;
}
