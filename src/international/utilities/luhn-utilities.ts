/**
 * Returns a single control digit for the given input
 *
 * @param input
 */
export function getLuhnControlDigit(input: string): number {
  let weight = 2;
  const multipliedDigits = [];

  for (let i = input.length - 1; i >= 0; i--) {
    const m = (parseInt(input[i], 10) * weight).toString();
    for (const j of m) {
      multipliedDigits.push(parseInt(j, 10));
    }
    weight = (weight % 2) + 1;
  }

  const sum = multipliedDigits.reduce((partialSum, d) => partialSum + d, 0);

  const mod10 = sum % 10;

  return mod10 ? 10 - mod10 : mod10;
}

/**
 * Returns an array of control digits for the given input
 *
 * @param input
 * @param numberOfDigits
 */
export function getLuhnControlDigits(input: string, numberOfDigits: number): number[] {
  const controlDigits: number[] = [];

  for (let i = numberOfDigits; i > 0; i--) {
    const c = getLuhnControlDigit(input);
    controlDigits.push(c);
    input += c.toString();
  }

  return controlDigits;
}

export function checkLuhnControlDigit(input: string): boolean {
  const c = getLuhnControlDigit(input.substring(0, input.length - 1));
  return c === parseInt(input.charAt(input.length - 1), 10);
}

export function checkLuhnControlDigits(input: string, numberOfDigits: number): boolean {
  for (let i = numberOfDigits - 1; i >= 0; i--) {
    if (!checkLuhnControlDigit(input.substring(0, input.length - i))) {
      return false;
    }
  }

  return true;
}
