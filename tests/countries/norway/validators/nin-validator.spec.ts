import { validateNin } from '@norway/validators';

describe('validate()', () => {
  it('should fail for input that does not follow the proper pattern for nin', () => {
    expect.hasAssertions();
    expect(validateNin('')).toBe(false);
    expect(validateNin('1234')).toBe(false);
    expect(validateNin('asdf')).toBe(false);
    expect(validateNin('asdf1234')).toBe(false);
  });

  it('should succeed for valid nin', () => {
    expect.hasAssertions();
    expect(validateNin('01028749879')).toBe(true);
    expect(validateNin('01028749364')).toBe(true);
    expect(validateNin('01026847822')).toBe(true);
    expect(validateNin('01026849590')).toBe(true);
  });

  it('should succeed for valid d-number', () => {
    expect.hasAssertions();
    expect(validateNin('41016508878')).toBe(true);
    expect(validateNin('50015902660')).toBe(true);
    expect(validateNin('60017407247')).toBe(true);
    expect(validateNin('70015101871')).toBe(true);
  });
});
