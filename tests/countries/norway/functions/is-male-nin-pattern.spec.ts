import { isMaleNinPattern } from '@norway/functions';

describe('isMaleNinPattern()', () => {
  it('should return false for non-male nin patterns', () => {
    expect.hasAssertions();
    expect(isMaleNinPattern('01067648087')).toBe(false);
    expect(isMaleNinPattern('01038649252')).toBe(false);
    expect(isMaleNinPattern('01060397267')).toBe(false);
    expect(isMaleNinPattern('01060393830')).toBe(false);
  });

  it('should return true for male nin patterns', () => {
    expect.hasAssertions();
    expect(isMaleNinPattern('05092399755')).toBe(true);
    expect(isMaleNinPattern('01098649707')).toBe(true);
    expect(isMaleNinPattern('05092395733')).toBe(true);
    expect(isMaleNinPattern('01095648777')).toBe(true);
  });
});
