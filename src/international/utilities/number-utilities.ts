/**
 * Returns a random number from the given range of numbers
 *
 * @param min
 * @param max
 */
export function getRandomNumberFromRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
