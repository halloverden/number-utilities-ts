import { isDNumberPattern } from '@norway/functions';

describe('isDNumberPattern()', () => {
  it('should return false for non-nin patterns', () => {
    expect.hasAssertions();
    expect(isDNumberPattern('')).toBe(false);
    expect(isDNumberPattern('1234')).toBe(false);
    expect(isDNumberPattern('asdf')).toBe(false);
  });

  it('should return false for non-d-number patterns', () => {
    expect.hasAssertions();
    expect(isDNumberPattern('01026849914')).toBe(false);
    expect(isDNumberPattern('01026846877')).toBe(false);
    expect(isDNumberPattern('01026845579')).toBe(false);
  });

  it('should return true for d-number patterns', () => {
    expect.hasAssertions();
    expect(isDNumberPattern('41016508878')).toBe(true);
    expect(isDNumberPattern('50015902660')).toBe(true);
    expect(isDNumberPattern('60017407247')).toBe(true);
    expect(isDNumberPattern('70015101871')).toBe(true);
  });
});
