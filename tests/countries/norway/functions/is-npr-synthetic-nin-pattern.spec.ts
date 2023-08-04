import { isNprSyntheticNinPattern } from '@norway/functions';

describe('isNprSyntheticNinPattern()', () => {
  it('should return false for non-nin patterns', () => {
    expect.hasAssertions();
    expect(isNprSyntheticNinPattern('')).toBe(false);
    expect(isNprSyntheticNinPattern('1234')).toBe(false);
    expect(isNprSyntheticNinPattern('asdf')).toBe(false);
  });

  it('should return false for non-npr-synthetic-nin patterns', () => {
    expect.hasAssertions();
    expect(isNprSyntheticNinPattern('01026849914')).toBe(false);
    expect(isNprSyntheticNinPattern('01026846877')).toBe(false);
    expect(isNprSyntheticNinPattern('01026845579')).toBe(false);
  });

  it('should return true for npr-synthetic-nin patterns', () => {
    expect.hasAssertions();
    expect(isNprSyntheticNinPattern('41816508878')).toBe(true);
    expect(isNprSyntheticNinPattern('50915902660')).toBe(true);
    expect(isNprSyntheticNinPattern('60817407247')).toBe(true);
    expect(isNprSyntheticNinPattern('70915101871')).toBe(true);
  });
});
