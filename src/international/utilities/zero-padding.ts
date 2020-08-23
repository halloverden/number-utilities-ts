/**
 * Returns a zero padded string with the length specified
 *
 * @param value
 * @param length
 *
 * @return string
 */
export function zeroPadding(value: string, length: number = 2): string {
  while (value.length < length) {
    value = '0' + value;
  }
  return value.slice(-length);
}
