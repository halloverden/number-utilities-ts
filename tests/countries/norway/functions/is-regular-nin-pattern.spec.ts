import { isRegularNinPattern } from '@norway/functions/is-regular-nin-pattern';

describe('isRegularNinPattern()', () => {
  it('should return false for non-nin patterns', () => {
    expect.hasAssertions();
    expect(isRegularNinPattern('')).toBe(false);
    expect(isRegularNinPattern('1234')).toBe(false);
    expect(isRegularNinPattern('asdf')).toBe(false);
  });

  it('isRegularNinPattern() should return true for regular nin patterns', () => {
    expect.hasAssertions();
    expect(isRegularNinPattern('16118849985')).toBe(true);
    expect(isRegularNinPattern('16118849470')).toBe(true);
    expect(isRegularNinPattern('01070498495')).toBe(true);
    expect(isRegularNinPattern('05092398619')).toBe(true);
  });
});
