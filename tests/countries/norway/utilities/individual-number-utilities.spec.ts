import { getIndRangesFromYear, getYearRangesFromInd } from '@norway/utilities';
import { IndRange, NinTypeEnum, YearRange } from '@norway/types';

describe('individual-number-utilities', () => {
  it('getIndRangesFromYear() should throw error for invalid years', () => {
    expect.hasAssertions();
    expect(() => {
      getIndRangesFromYear(123);
    }).toThrow('No valid range for given year: 123');
    expect(() => {
      getIndRangesFromYear(1);
    }).toThrow('No valid range for given year: 1');
    expect(() => {
      getIndRangesFromYear(4312);
    }).toThrow('No valid range for given year: 4312');
    expect(() => {
      getIndRangesFromYear(-5);
    }).toThrow('No valid range for given year: -5');
    expect(() => {
      getIndRangesFromYear(1802);
    }).toThrow('No valid range for given year: 1802');
  });

  it('getIndRangesFromYear() should return valid IndRange for 1900', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 0, indEnd: 499 }
    ];
    const actual = getIndRangesFromYear(1900);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 1860', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 500, indEnd: 749 }
    ];
    const actual = getIndRangesFromYear(1860);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 2005', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 500, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(2005);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });


  it('getIndRangesFromYear() should return valid IndRange for 1999', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 0, indEnd: 499 },
      { indStart: 900, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(1999);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 1975', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 0, indEnd: 499 },
      { indStart: 900, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(1975);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 2020', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 500, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(2020);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 1980', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 0, indEnd: 499 },
      { indStart: 900, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(1980);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 1890 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 0, indEnd: 499 }
    ];
    const actual = getIndRangesFromYear(1890, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 1980 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 0, indEnd: 499 }
    ];
    const actual = getIndRangesFromYear(1980, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 2004 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 500, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(2004, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getIndRangesFromYear() should return valid IndRange for 2020 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { indStart: 500, indEnd: 999 }
    ];
    const actual = getIndRangesFromYear(2020, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should throw error for invalid individual ranges', () => {
    expect.hasAssertions();
    expect(() => {
      getYearRangesFromInd(1231);
    }).toThrow('No valid range for given individual number: 1231');
    expect(() => {
      getYearRangesFromInd(12300);
    }).toThrow('No valid range for given individual number: 12300');
    expect(() => {
      getYearRangesFromInd(4312);
    }).toThrow('No valid range for given individual number: 4312');
    expect(() => {
      getYearRangesFromInd(-5);
    }).toThrow('No valid range for given individual number: -5');
    expect(() => {
      getYearRangesFromInd(1802);
    }).toThrow('No valid range for given individual number: 1802');
  });

  it('getYearRangesFromInd() should return valid YearRange for 159', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1900, toYear: 1999 }
    ];
    const actual = getYearRangesFromInd(159);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 515', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1854, toYear: 1899 },
      { fromYear: 2000, toYear: 2039 }
    ];
    const actual = getYearRangesFromInd(515);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 654', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1854, toYear: 1899 },
      { fromYear: 2000, toYear: 2039 }
    ];
    const actual = getYearRangesFromInd(654);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 954', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1940, toYear: 1999 },
      { fromYear: 2000, toYear: 2039 }
    ];
    const actual = getYearRangesFromInd(954);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 999', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1940, toYear: 1999 },
      { fromYear: 2000, toYear: 2039 }
    ];
    const actual = getYearRangesFromInd(999);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 25 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1854, toYear: 1999 }
    ];
    const actual = getYearRangesFromInd(25, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 321 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1854, toYear: 1999 }
    ];
    const actual = getYearRangesFromInd(321, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });


  it('getYearRangesFromInd() should return valid YearRange for 498 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 1854, toYear: 1999 }
    ];
    const actual = getYearRangesFromInd(498, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 560 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 2000, toYear: 2300 }
    ];
    const actual = getYearRangesFromInd(560, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 650 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 2000, toYear: 2300 }
    ];
    const actual = getYearRangesFromInd(650, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });

  it('getYearRangesFromInd() should return valid YearRange for 999 and D-number', () => {
    expect.hasAssertions();
    const expected = [
      { fromYear: 2000, toYear: 2300 }
    ];
    const actual = getYearRangesFromInd(999, NinTypeEnum.TYPE_D_NUMBER);

    expect(actual).toBeTruthy();
    expect(compareArrays(actual, expected)).toBe(true);
  });
});

function compareArrays(actual: IndRange[]|YearRange[], expected: IndRange[]|YearRange[]): boolean {
  if (actual.length !== expected.length) {
    return false;
  }

  const actualOfStrings = [];
  const expectedOfStrings = [];

  for (const a of actual) {
    actualOfStrings.push(JSON.stringify(a));
  }

  actualOfStrings.sort();

  for (const e of expected) {
    expectedOfStrings.push(JSON.stringify(e));
  }

  expectedOfStrings.sort();

  for (let i = 0; i < actualOfStrings.length; i++) {
    if (actualOfStrings[i] !== expectedOfStrings[i]) {
      return false;
    }
  }

  return true;
}
