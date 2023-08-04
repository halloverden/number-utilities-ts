import { getRandomNumberFromRange } from '@international/utilities';

describe('getRandomNumberFromRange()', () => {
  it('should return a value of 0 or 1 for range 0, 1', () => {
    expect.hasAssertions();
    let r: number[] = [];
    for (let i = 0; i < 100000; i++) {
      r.push(getRandomNumberFromRange(0, 1));
    }

    r = r.filter((v, i, a) => a.indexOf(v) === i);
    r.sort();

    expect(r).toStrictEqual([0, 1]);
  });

  it('should return a value between 267 and 957 (inclusive) for range 267, 957', () => {
    expect.hasAssertions();
    let r: number[] = [];
    const from = 267;
    const to = 957;
    for (let i = 0; i < 100000; i++) {
      r.push(getRandomNumberFromRange(from, to));
    }

    const expected: number[] = [];
    for (let j = from; j <= to; j++) {
      expected.push(j);
    }
    expected.sort();

    r = r.filter((v, i, a) => a.indexOf(v) === i);
    r.sort();

    expect(r).toStrictEqual(expected);
  });
});
