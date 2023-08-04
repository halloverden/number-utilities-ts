/**
 * Checks whether a given date exists
 *
 * @param year
 * @param month
 * @param day
 */
export function checkDate(year: number, month: number, day: number): boolean {
  const d = new Date(year, month - 1, day);

  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
}
