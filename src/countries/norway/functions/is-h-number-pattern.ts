import { isNinPattern } from './is-nin-pattern';

export function isHNumberPattern(nin: string): boolean {
  if (!isNinPattern(nin)) {
    return false;
  }

  const m1 = parseInt(nin.charAt(2), 10);

  return m1 >= 4 && m1 < 8;
}
