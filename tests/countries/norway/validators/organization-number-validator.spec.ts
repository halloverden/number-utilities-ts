import { validateOrganizationNumber } from '@norway/validators';

describe('validate()', () => {
  it('should fail if input does not follow the allowed organization number pattern', () => {
    expect.hasAssertions();
    expect(validateOrganizationNumber('')).toBe(false);
    expect(validateOrganizationNumber('asdf')).toBe(false);
    expect(validateOrganizationNumber('1234')).toBe(false);
    expect(validateOrganizationNumber('651651651651')).toBe(false);
    expect(validateOrganizationNumber('651651651651')).toBe(false);
  });

  it('should succeed for valid organization numbers', () => {
    expect.hasAssertions();
    expect(validateOrganizationNumber('922171920')).toBe(true);
    expect(validateOrganizationNumber('922138079')).toBe(true);
    expect(validateOrganizationNumber('976107268')).toBe(true);
    expect(validateOrganizationNumber('811714682')).toBe(true);
    expect(validateOrganizationNumber('916330561')).toBe(true);
  });

  it('should accept spaces in the incoming number', () => {
    expect.hasAssertions();
    expect(validateOrganizationNumber('922 171 920')).toBe(true);
    expect(validateOrganizationNumber('922 1380 79')).toBe(true);
    expect(validateOrganizationNumber('976 10726 8')).toBe(true);
    expect(validateOrganizationNumber('811 71 4682')).toBe(true);
    expect(validateOrganizationNumber('916 330 561')).toBe(true);
  });
});
