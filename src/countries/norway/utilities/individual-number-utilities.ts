import { SsnIndividualNumberMappingEntity } from '@norway/types';

export const ssnFactors = [3, 7, 6, 1, 8, 9, 4, 5, 2];

export const ssnIndividualNumberMappings = [
  new SsnIndividualNumberMappingEntity(1854, 1899, 500, 749),
  new SsnIndividualNumberMappingEntity(1940, 1999, 900, 999),
  new SsnIndividualNumberMappingEntity(1900, 1999, 0, 499),
  new SsnIndividualNumberMappingEntity(2000, 2039, 500, 999)
];

/**
 * Get the range of individual numbers that are valid for a given year
 *
 * @param year
 */
export function getIndRangeFromYear(year: number): { indStart: number; indEnd: number } | null {
  const validRanges = [];

  for (const mapping of ssnIndividualNumberMappings) {
    if (year >= mapping.fromYear && year <= mapping.toYear) {
      validRanges.push(mapping);
    }
  }

  if (validRanges.length === 0) {
    return null;
  }

  if (validRanges.length === 1) {
    return { indStart: validRanges[0].indStart, indEnd: validRanges[0].indEnd };
  }

  let indStart = validRanges[0].indStart;
  let indEnd = validRanges[0].indEnd;

  for (let j = 1; j < validRanges.length; j++) {
    if (indStart > validRanges[j].indStart) {
      indStart = validRanges[j].indStart;
    }
    if (indEnd < validRanges[j].indEnd) {
      indEnd = validRanges[j].indEnd;
    }
  }

  return { indStart, indEnd };
}
