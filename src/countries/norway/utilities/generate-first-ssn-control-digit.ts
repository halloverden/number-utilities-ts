import { ssnFactors } from '@norway/utilities/individual-number-utilities';

/**
 * Generates the first control digit of the given start of an ssn
 *
 * @param ssnStart
 *
 * @param exclude
 * @return number
 */
export function generateFirstSsnControlDigit(ssnStart: string, exclude: number[] = []): number | null {
  const tried = [];
  let c1 = null;

  while (null === c1) {
    let factorSum = 0;

    for (let i = 0; i < ssnFactors.length; i++) {
      factorSum += parseInt(ssnStart.charAt(i), 10) * ssnFactors[i];
    }

    c1 = 11 - (factorSum % 11);

    if (c1 === 11) {
      c1 = 0;
    }

    if (10 === c1 || exclude.includes(c1)) {
      tried.push(c1);

      if (tried.filter((value) => exclude.includes(value)).length === exclude.length) {
        return null;
      }

      c1 = null;
    }
  }

  return c1;
}
