import { IndRange, NinIndividualNumberRangeMapping, NinType, YearRange } from '../types';

/**
 * See: https://lovdata.no/dokument/SF/forskrift/2017-07-14-1201
 */
export const ninIndividualNumberMappings: NinIndividualNumberRangeMapping[] = [
  { indStart: 500, indEnd: 749, fromYear: 1854, toYear: 1899 },
  { indStart: 900, indEnd: 999, fromYear: 1940, toYear: 1999 },
  { indStart: 0, indEnd: 499, fromYear: 1900, toYear: 1999 },
  { indStart: 500, indEnd: 999, fromYear: 2000, toYear: 2039 }
];

export const ninIndividualNumberDNumberMappings: NinIndividualNumberRangeMapping[] = [
  { indStart: 0, indEnd: 499, fromYear: 1854, toYear: 1999 },
  { indStart: 500, indEnd: 999, fromYear: 2000, toYear: 2300 }
];

/**
 * Returns the range of individual numbers that are valid for a given year
 *
 * @param year
 * @param type
 */
export function getIndRangesFromYear(year: number, type: NinType = NinType.TYPE_REGULAR_NIN): IndRange[] {
  const validMappings: NinIndividualNumberRangeMapping[] = [];

  const availableMappings =
    type === NinType.TYPE_D_NUMBER ? ninIndividualNumberDNumberMappings : ninIndividualNumberMappings;

  for (const mapping of availableMappings) {
    if (year >= mapping.fromYear && year <= mapping.toYear) {
      validMappings.push(mapping);
    }
  }

  if (validMappings.length === 0) {
    throw new Error('No valid range for given year: ' + year.toString());
  }

  return validMappings.map((m) => {
    return { indStart: m.indStart, indEnd: m.indEnd };
  });
}

/**
 * Returns the range of individual number range mappings that are valid for a given individual number
 *
 * @param ind
 * @param type
 */
export function getNinIndividualNumberRangeMappingTypesFromInd(
  ind: number,
  type: NinType = NinType.TYPE_REGULAR_NIN
): NinIndividualNumberRangeMapping[] {
  const validMappings: NinIndividualNumberRangeMapping[] = [];

  const availableMappings =
    type === NinType.TYPE_D_NUMBER ? ninIndividualNumberDNumberMappings : ninIndividualNumberMappings;

  for (const mapping of availableMappings) {
    if (ind >= mapping.indStart && ind <= mapping.indEnd) {
      validMappings.push(mapping);
    }
  }

  if (validMappings.length === 0) {
    throw new Error('No valid range for given individual number: ' + ind.toString());
  }

  return validMappings;
}

/**
 * Returns the range of years that are valid for a given individual number
 *
 * @param ind
 * @param type
 */
export function getYearRangesFromInd(ind: number, type: NinType = NinType.TYPE_REGULAR_NIN): YearRange[] {
  return getNinIndividualNumberRangeMappingTypesFromInd(ind, type).map((m) => {
    return { fromYear: m.fromYear, toYear: m.toYear };
  });
}
