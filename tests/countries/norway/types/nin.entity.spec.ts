import { NinEntity } from '@norway/types';

describe('the NinEntity instantiation', () => {
  it('should throw if invalid nin', () => {
    expect.hasAssertions();
    expect(() => {
      new NinEntity('');
    }).toThrow('Invalid nin');
    expect(() => {
      new NinEntity('1234');
    }).toThrow('Invalid nin');
    expect(() => {
      new NinEntity('asdf');
    }).toThrow('Invalid nin');
    expect(() => {
      new NinEntity('asdf1234');
    }).toThrow('Invalid nin');
  });

  it('should work for valid regular nins', () => {
    expect.hasAssertions();
    const nins = [];
    nins.push(new NinEntity('01028749879'));
    nins.push(new NinEntity('01028749364'));
    nins.push(new NinEntity('01026847822'));
    nins.push(new NinEntity('01026849590'));

    for (const ninEntity of nins) {
      expect(ninEntity.nin).toBeTruthy();
    }
  });
});
