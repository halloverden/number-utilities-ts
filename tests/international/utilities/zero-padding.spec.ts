import { zeroPadding } from '@international/utilities';

describe('zeroPadding()', () => {
  it('should return \'doot\' for input (\'doot\')', () => {
    expect.hasAssertions();
    expect(zeroPadding('doot')).toBe('doot');
  });

  it('should return \'123\' for input (\'123\')', () => {
    expect.hasAssertions();
    expect(zeroPadding('123')).toBe('123');
  });

  it('should return \'01\' for input (\'1\')', () => {
    expect.hasAssertions();
    expect(zeroPadding('1')).toBe('01');
  });

  it('should return \'00100\' for input (\'100\',  5)', () => {
    expect.hasAssertions();
    expect(zeroPadding('100', 5)).toBe('00100');
  });

  it('should return \'000000000000100\' for input (\'100\',  15)', () => {
    expect.hasAssertions();
    expect(zeroPadding('100', 15)).toBe('000000000000100');
  });
});
