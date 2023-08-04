import { isNinPattern } from '@norway/functions';

describe('isNinPattern()', () => {
  it('should return false for non-nin patterns', () => {
    expect.hasAssertions();
    expect(isNinPattern('')).toBe(false);
    expect(isNinPattern('1234')).toBe(false);
    expect(isNinPattern('asdf')).toBe(false);
    expect(isNinPattern('asdf1234')).toBe(false);
  });

  it('isNinPattern() should return true for nin patterns', () => {
    expect.hasAssertions();
    expect(isNinPattern('05092399755')).toBe(true);
    expect(isNinPattern('01098649707')).toBe(true);
    expect(isNinPattern('01067646661')).toBe(true);
    expect(isNinPattern('01067643867')).toBe(true);
  });
});
