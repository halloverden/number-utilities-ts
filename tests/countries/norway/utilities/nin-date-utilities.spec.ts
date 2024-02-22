import { getBirthDateFromNinEntity } from '@norway/utilities';
import { NinEntity } from '@norway/types';

describe('nin-date-utilities.getBirthDateFromNin()', () => {
  it('should return the correct birth date for 01026849833', () => {
    expect.hasAssertions();
    const d1 = getBirthDateFromNinEntity(new NinEntity('01026849833'));
    const cd1 = new Date(1968, 1, 1, 0, 0, 0, 0);
    expect(d1).toBeTruthy();
    expect(d1.toDateString()).toStrictEqual(cd1.toDateString());
  });

  it('should return the correct birth date for 01025454908', () => {
    expect.hasAssertions();
    const d2 = getBirthDateFromNinEntity(new NinEntity('01025454908'));
    const cd2 = new Date(1854, 1, 1, 0, 0, 0, 0);
    expect(d2).toBeTruthy();
    expect(d2.toDateString()).toStrictEqual(cd2.toDateString());
  });

  it('should return the correct birth date for 01021048557', () => {
    expect.hasAssertions();
    const d3 = getBirthDateFromNinEntity(new NinEntity('01021048557'));
    const cd3 = new Date(1910, 1, 1, 0, 0, 0, 0);
    expect(d3).toBeTruthy();
    expect(d3.toDateString()).toStrictEqual(cd3.toDateString());
  });

  it('should return the correct birth date for 24040499268', () => {
    expect.hasAssertions();
    const d4 = getBirthDateFromNinEntity(new NinEntity('24040499268'));
    const cd4 = new Date(2004, 3, 24, 0, 0, 0, 0);
    expect(d4).toBeTruthy();
    expect(d4.toDateString()).toStrictEqual(cd4.toDateString());
  });

  it('should return the correct birth date for 01038054070', () => {
    expect.hasAssertions();
    const d5 = getBirthDateFromNinEntity(new NinEntity('01038054070'));
    const cd5 = new Date(1880, 2, 1, 0, 0, 0, 0);
    expect(d5).toBeTruthy();
    expect(d5.toDateString()).toStrictEqual(cd5.toDateString());
  });

  it('should return the correct birth date for 01032078806', () => {
    expect.hasAssertions();
    const d6 = getBirthDateFromNinEntity(new NinEntity('01032078806'));
    const cd6 = new Date(2020, 2, 1, 0, 0, 0, 0);
    expect(d6).toBeTruthy();
    expect(d6.toDateString()).toStrictEqual(cd6.toDateString());
  });

  it('should return the correct birth date for 07031953000', () => {
    expect.hasAssertions();
    const d7 = getBirthDateFromNinEntity(new NinEntity('07031953000'));
    const cd7 = new Date(2019, 2, 7, 0, 0, 0, 0);
    expect(d7).toBeTruthy();
    expect(d7.toDateString()).toStrictEqual(cd7.toDateString());
  });

  it('should return the correct birth date for 41038058167', () => {
    expect.hasAssertions();
    const d8 = getBirthDateFromNinEntity(new NinEntity('41038058167'));
    const cd8 = new Date(1880, 2, 1, 0, 0, 0, 0);
    expect(d8).toBeTruthy();
    expect(d8.toDateString()).toStrictEqual(cd8.toDateString());
  });

  it('should return the correct birth date for 64040472086', () => {
    expect.hasAssertions();
    const d9 = getBirthDateFromNinEntity(new NinEntity('64040472086'));
    const cd9 = new Date(2004, 3, 24, 0, 0, 0, 0);
    expect(d9).toBeTruthy();
    expect(d9.toDateString()).toStrictEqual(cd9.toDateString());
  });

  it('should return the correct birth date for 47031999088', () => {
    expect.hasAssertions();
    const d10 = getBirthDateFromNinEntity(new NinEntity('47031999088'));
    const cd10 = new Date(2019, 2, 7, 0, 0, 0, 0);
    expect(d10).toBeTruthy();
    expect(d10.toDateString()).toStrictEqual(cd10.toDateString());
  });
});
