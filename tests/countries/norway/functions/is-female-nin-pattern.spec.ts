import { isFemaleNinPattern } from '@norway/functions';

describe('isFemaleNinPattern()', () => {
  it('should return false for non-female nin patterns', () => {
    expect.hasAssertions();
    expect(isFemaleNinPattern('05092399755')).toBe(false);
    expect(isFemaleNinPattern('01098649707')).toBe(false);
    expect(isFemaleNinPattern('05092395733')).toBe(false);
    expect(isFemaleNinPattern('01095648777')).toBe(false);
  });

  it('isFemaleNinPattern() should return true for female nin patterns', () => {
    expect.hasAssertions();
    expect(isFemaleNinPattern('01067647889')).toBe(true);
    expect(isFemaleNinPattern('01038649252')).toBe(true);
    expect(isFemaleNinPattern('01060397267')).toBe(true);
    expect(isFemaleNinPattern('01060393830')).toBe(true);
  });
});
