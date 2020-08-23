/**
 * @param ssn
 *
 * @return boolean
 */
export function isHNumber(ssn: string): boolean | null {
  if (ssn.length !== 11) {
    return false;
  }

  return parseInt(ssn.charAt(2), 10) >= 4;
}
