import { isNinPattern } from './is-nin-pattern';
import { isDNumberPattern } from './is-d-number-pattern';
import { isHNumberPattern } from './is-h-number-pattern';
import { isNprSyntheticNinPattern } from './is-npr-synthetic-nin-pattern';

/**
 * @param nin
 *
 * @return boolean
 */
export function isRegularNinPattern(nin: string): boolean {
  if (!isNinPattern(nin)) {
    return false;
  }

  return !isDNumberPattern(nin) && !isHNumberPattern(nin) && !isNprSyntheticNinPattern(nin);
}
