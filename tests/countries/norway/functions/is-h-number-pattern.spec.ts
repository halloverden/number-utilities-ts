import { isHNumberPattern } from '@norway/functions';

describe('isHNumberPattern()', () => {
  it('should return false for non-nin patterns', () => {
    expect.hasAssertions();
    expect(isHNumberPattern('')).toBe(false);
    expect(isHNumberPattern('1234')).toBe(false);
    expect(isHNumberPattern('asdf')).toBe(false);
  });

  it('should return false for non-h-number patterns', () => {
    expect.hasAssertions();
    expect(isHNumberPattern('01026849914')).toBe(false);
    expect(isHNumberPattern('01026846877')).toBe(false);
    expect(isHNumberPattern('01026845579')).toBe(false);
  });

  it('should return true for h-number patterns', () => {
    expect.hasAssertions();
    expect(isHNumberPattern('01416508878')).toBe(true);
    expect(isHNumberPattern('10515902660')).toBe(true);
    expect(isHNumberPattern('20417407247')).toBe(true);
    expect(isHNumberPattern('30515101871')).toBe(true);
  });
});
