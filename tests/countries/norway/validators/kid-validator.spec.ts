import { validateKidNumber } from '@norway/validators';

describe('validate()', () => {
  it('should fail if number is neither Mod11 nor Luhn "compatible"', () => {
    expect.hasAssertions();
    expect(validateKidNumber('')).toBe(false);
    expect(validateKidNumber('51028745503')).toBe(false);
    expect(validateKidNumber('51028745509')).toBe(false);
    expect(validateKidNumber('51028745504')).toBe(false);
    expect(validateKidNumber('51028745505')).toBe(false);
  });

  it('should succeed if number is Mod11 "compatible"', () => {
    expect.hasAssertions();
    expect(validateKidNumber('51028745501')).toBe(true);
    expect(validateKidNumber('01028745539')).toBe(true);
    expect(validateKidNumber('01028745504')).toBe(true);
  });

  it('should succeed if number is Luhn "compatible"', () => {
    expect.hasAssertions();
    expect(validateKidNumber('51028745506')).toBe(true);
    expect(validateKidNumber('01028745535')).toBe(true);
    expect(validateKidNumber('01028745501')).toBe(true);
    expect(validateKidNumber('1234567897')).toBe(true);
  });
});
