import { getRandomNinForDate } from '@norway/functions';
import { NinTypeEnum } from '@norway/types';

describe('getRandomNinForDate()', () => {
  it('should return a valid nin of each type for the given date object (1968-02-01)', () => {
    expect.hasAssertions();
    const d = new Date(1968, 1, 1, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });

  it('should return a valid nin of each type for the given date object (1854-02-01)', () => {
    expect.hasAssertions();
    const d = new Date(1854, 1, 1, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });

  it('should return a valid nin of each type for the given date object (1910-02-01)', () => {
    expect.hasAssertions();
    const d = new Date(1910, 1, 1, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });

  it('should return a valid nin of each type for the given date object (2004-04-24)', () => {
    expect.hasAssertions();
    const d = new Date(2004, 3, 24, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });

  it('should return a valid nin of each type for the given date object (1880-03-01)', () => {
    expect.hasAssertions();
    const d = new Date(1880, 2, 1, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });

  it('should return a valid nin of each type for the given date object (2020-03-01)', () => {
    expect.hasAssertions();
    const d = new Date(2020, 2, 1, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });

  it('should return a valid nin of each type for the given date object (1950-03-01)', () => {
    expect.hasAssertions();
    const d = new Date(1950, 2, 1, 0, 0, 0, 0);
    const nin = getRandomNinForDate(d);
    const dn = getRandomNinForDate(d, NinTypeEnum.TYPE_D_NUMBER);
    const hn = getRandomNinForDate(d, NinTypeEnum.TYPE_H_NUMBER);
    const npr = getRandomNinForDate(d, NinTypeEnum.TYPE_NPR_SYNTHETIC);

    expect(nin.isRegularNin()).toBe(true);
    expect(dn.isDNumber()).toBe(true);
    expect(hn.isHNumber()).toBe(true);
    expect(npr.isNprSyntheticNin()).toBe(true);
  });
});
