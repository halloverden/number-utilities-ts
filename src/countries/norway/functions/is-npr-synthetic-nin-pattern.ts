import { isNinPattern } from './is-nin-pattern';

export function isNprSyntheticNinPattern(nin: string): boolean {
  if (!isNinPattern(nin)) {
    return false;
  }

  return parseInt(nin.charAt(2), 10) >= 8;
}
