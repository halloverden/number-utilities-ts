/**
 * Returns array with unique values only
 *
 * @param array
 */
export function arrayUnique<T>(array: T[]): T[] {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
