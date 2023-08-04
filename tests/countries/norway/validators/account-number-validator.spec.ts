import { validateAccountNumber } from '@norway/validators';

describe('validate()', () => {
  it('should fail if input does not follow valid account number pattern', () => {
    expect.hasAssertions();
    expect(validateAccountNumber('1234')).toBe(false);
    expect(validateAccountNumber('1234.23..212312312')).toBe(false);
    expect(validateAccountNumber('123423212312312')).toBe(false);
    expect(validateAccountNumber('1234230')).toBe(false);
  });

  it('should fail if input is not a valid account number', () => {
    expect.hasAssertions();
    expect(validateAccountNumber('73256545373')).toBe(false);
    expect(validateAccountNumber('7325.65.45373')).toBe(false);
  });

  it('should succeed if input is a valid account number', () => {
    expect.hasAssertions();
    expect(validateAccountNumber('73251223650')).toBe(true);
    expect(validateAccountNumber('7325.12.23650')).toBe(true);
  });
});
