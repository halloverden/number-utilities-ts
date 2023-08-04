/**
 * Calculates a single control digit from the given input
 *
 * @param input
 * @param weights
 * @param acceptedRemainders Which remainders will be returned as is
 * @param onRemainder1 What to return if remainder is 1
 *
 * @return string
 */
export function getMod11ControlDigit(
  input: string,
  weights: number[],
  acceptedRemainders = [0],
  onRemainder1 = '-'
): string {
  const length = input.length;
  if (length !== weights.length) {
    throw new Error('A weight needs to be assigned to each digit');
  }

  let sum = 0;
  for (let i = 0; i < length; i++) {
    if (!new RegExp('^\\d$').test(input[i])) {
      throw new Error('All characters in the input string must be digits');
    }

    sum += parseInt(input[i], 10) * weights[i];
  }

  const remainder = sum % 11;

  if (acceptedRemainders.indexOf(remainder) !== -1) {
    return remainder.toString();
  }

  switch (remainder) {
    case 1:
      return onRemainder1;
    default:
      return (11 - remainder).toString();
  }
}

/**
 * Runs the getMod11ControlDigit the given number of times, and returns an array of control digits
 *
 * @param input
 * @param numberOfDigits
 * @param throwIfOne
 *
 * @return number[]
 */
export function getMod11ControlDigits(input: string, numberOfDigits: number, throwIfOne = true): string[] {
  const controlDigits = [];
  for (let i = numberOfDigits; i > 0; i--) {
    const c = getMod11ControlDigit(input, getDefaultMod11WeightsForLength(input.length));
    if ('-' === c && throwIfOne) {
      throw new Error('A control digit was 1. Aborting...');
    }
    controlDigits.push(c);
    input += c.toString();
  }

  return controlDigits;
}

export function getDefaultMod11WeightsForLength(length: number): number[] {
  let w = 2;
  const weights = [];

  for (let i = 0; i < length; i++) {
    weights.push(w);
    w = w >= 7 ? 2 : w + 1;
  }

  return weights.reverse();
}
