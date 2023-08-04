import { getDefaultMod11WeightsForLength, getMod11ControlDigit, getMod11ControlDigits } from '@international/utilities';

describe('getDefaultMod11WeightsForLength()', () => {
  it('should return [2] for length 1', () => {
    expect.hasAssertions();
    expect(getDefaultMod11WeightsForLength(1)).toStrictEqual([2]);
  });

  it('should return [4, 3, 2] for length 3', () => {
    expect.hasAssertions();
    expect(getDefaultMod11WeightsForLength(3)).toStrictEqual([4, 3, 2]);
  });

  it('should return [5, 4, 3, 2, 7, 6, 5, 4, 3, 2] for length 10', () => {
    expect.hasAssertions();
    expect(getDefaultMod11WeightsForLength(10)).toStrictEqual([5, 4, 3, 2, 7, 6, 5, 4, 3, 2]);
  });
});
describe('getMod11ControlDigit()', () => {
  it('should create correct control digit', () => {
    expect.hasAssertions();
    const values = [
      { input: '5102874550', expectedOutput: '1' },
      { input: '51028745501', expectedOutput: '-' },
      { input: '0102874553', expectedOutput: '9' },
      { input: '0102874550', expectedOutput: '4' },
      { input: '123456789', expectedOutput: '2' },
      { input: '98765', expectedOutput: '4' },
      { input: '1', expectedOutput: '9' }
    ];

    values.forEach((v) => {
      const output = getMod11ControlDigit(v.input, getDefaultMod11WeightsForLength(v.input.length));
      expect(output).toStrictEqual(v.expectedOutput);
    });

  });
});
describe('getMod11ControlDigits()', () => {
  it('should return an array of correct control digits and "-" if throwIfOne === false', () => {
    expect.hasAssertions();
    const values = [
      { input: '5102874550', numberOfDigits: 2, expectedOutput: ['1', '-'] },
      { input: '0102874553', numberOfDigits: 4, expectedOutput: ['9', '4', '5', '4'] },
      { input: '0102874550', numberOfDigits: 2, expectedOutput: ['4', '1'] },
      { input: '123456789', numberOfDigits: 1, expectedOutput: ['2'] },
      { input: '123456789', numberOfDigits: 2, expectedOutput: ['2', '-'] },
      { input: '98765', numberOfDigits: 3, expectedOutput: ['4', '5', '-'] },
      { input: '1', numberOfDigits: 2, expectedOutput: ['9', '1'] },
      { input: '1', numberOfDigits: 3, expectedOutput: ['9', '1', '0'] }
    ];

    values.forEach((v) => {
      const output = getMod11ControlDigits(v.input, v.numberOfDigits, false);
      expect(output).toStrictEqual(v.expectedOutput);
    });

  });

  it('should throw if control digit is 1', () => {
    expect.hasAssertions();
    expect(() => {
      getMod11ControlDigits('5102874550', 3);
    }).toThrow('A control digit was 1. Aborting...');

  });
});
