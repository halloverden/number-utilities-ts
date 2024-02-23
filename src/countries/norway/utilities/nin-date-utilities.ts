import { NinEntity } from '../types';
import { checkDate } from '../../../international/utilities/date-utilities';

/**
 * Parses the birthdate from the given nin entity
 *
 * @param ninEntity
 */
export function getBirthDateFromNinEntity(ninEntity: NinEntity): Date {
  const day = getDayFromNinEntity(ninEntity);
  const month = getMonthFromNinEntity(ninEntity);
  const year = getYearFromNin(ninEntity.nin);

  if (!checkDate(year, month, day)) {
    throw new Error('Invalid date');
  }
  const d = new Date(year, month - 1, day);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);

  return d;
}

/**
 * Parses the day of the birthdate from the given nin entity
 *
 * @param ninEntity
 */
export function getDayFromNinEntity(ninEntity: NinEntity): number {
  const day = parseInt(ninEntity.nin.substring(0, 2), 10);

  if (ninEntity.isDNumber()) {
    return day - 40;
  }

  return day;
}

/**
 * Parses the month of the birthdate from the given nin entity
 *
 * @param ninEntity
 */
export function getMonthFromNinEntity(ninEntity: NinEntity): number {
  const month = parseInt(ninEntity.nin.substring(2, 4), 10);

  if (ninEntity.isHNumber()) {
    return month - 40;
  }

  if (ninEntity.isNprSyntheticNin()) {
    return month - 80;
  }

  return month;
}

/**
 * Parses the year of the birthdate from the given nin entity
 *
 * @param ninEntity
 */
export function getYearFromNinEntity(ninEntity: NinEntity): number {
  return getYearFromNin(ninEntity.nin);
}

/**
 * Parses the year of the birthdate from the given nin
 *
 * @param nin
 */
export function getYearFromNin(nin: string): number {
  const year = parseInt(nin.substring(4, 6), 10);
  const ind = parseInt(nin.substring(6, 9), 10);

  if (ind >= 0 && ind <= 499) {
    return 1900 + year;
  }

  if (ind >= 500 && ind <= 749 && year >= 54 && year <= 99) {
    return 1800 + year;
  }

  if (ind >= 500 && ind <= 999 && year >= 0 && year <= 39) {
    return 2000 + year;
  }

  if (ind >= 900 && ind <= 999 && year >= 40 && year <= 99) {
    return 1900 + year;
  }

  throw new Error('Invalid nin');
}
