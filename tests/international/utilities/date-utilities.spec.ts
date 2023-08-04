import { checkDate } from '@international/utilities/date-utilities';

describe('checkDate()', () => {
  it('should return true for 1600, 2, 29', () => {
    expect.hasAssertions();
    expect(checkDate(1600, 2, 29)).toBe(true);
  });

  it('should return true for 1988, 11, 16', () => {
    expect.hasAssertions();
    expect(checkDate(1988, 11, 16)).toBe(true);
  });

  it('should return true for 2000, 2, 29', () => {
    expect.hasAssertions();
    expect(checkDate(2000, 2, 29)).toBe(true);
  });

  it('should return true for 2004, 2, 29', () => {
    expect.hasAssertions();
    expect(checkDate(2004, 2, 29)).toBe(true);
  });

  it('should return true for 2104, 6, 16', () => {
    expect.hasAssertions();
    expect(checkDate(2104, 6, 16)).toBe(true);
  });

  it('should return false for 1800, 2, 29', () => {
    expect.hasAssertions();
    expect(checkDate(1800, 2, 29)).toBe(false);
  });

  it('should return false for 2001, 2, 29', () => {
    expect.hasAssertions();
    expect(checkDate(2001, 2, 29)).toBe(false);
  });
});
