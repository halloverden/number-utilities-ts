/**
 * Returns a zero padded string with the length specified
 * If length of incoming value is longer than or equal to the specified length,
 * the value is returned unmodified
 *
 * @param value
 * @param length
 *
 * @return string
 */
export function zeroPadding(value: string, length = 2): string {
  if (value.length >= length) {
    return value;
  }

  while (value.length < length) {
    value = '0' + value;
  }
  return value.slice(-length);
}
