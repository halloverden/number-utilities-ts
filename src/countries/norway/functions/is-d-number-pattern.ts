import { isNinPattern } from './is-nin-pattern';

export function isDNumberPattern(nin: string): boolean {
  if (!isNinPattern(nin)) {
    return false;
  }

  return parseInt(nin.charAt(0), 10) >= 4;
}
