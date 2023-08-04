import { isNinPattern } from './is-nin-pattern';

export function isMaleNinPattern(nin: string): boolean {
  if (!isNinPattern(nin)) {
    return false;
  }

  return parseInt(nin.substring(8, 9), 10) % 2 !== 0;
}
