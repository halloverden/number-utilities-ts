import { getBirthDateFromSsn } from '@norway/functions';

test( 'getBirthDateFromSsn() should return null if ssn is invalid', () => {
  expect( getBirthDateFromSsn( '' ) ).toEqual( null );
  expect( getBirthDateFromSsn( '1234' ) ).toEqual( null );
  expect( getBirthDateFromSsn( 'asdf' ) ).toEqual( null );
} );

test( 'getBirthDateFromSsn() should return the correct birth date for a valid ssn or D-number', () => {
  const d1 = getBirthDateFromSsn( '01026849833' );
  const cd1 = new Date( 1968, 1, 1, 0, 0, 0, 0 );
  expect( d1 ).toBeTruthy();
  if ( d1 ) {
    expect( d1.toDateString() ).toEqual( cd1.toDateString() );
  }

  const d2 = getBirthDateFromSsn( '01025454908' );
  const cd2 = new Date( 1854, 1, 1, 0, 0, 0, 0 );
  expect( d2 ).toBeTruthy();
  if ( d2 ) {
    expect( d2.toDateString() ).toEqual( cd2.toDateString() );
  }

  const d3 = getBirthDateFromSsn( '01021048557' );
  const cd3 = new Date( 1910, 1, 1, 0, 0, 0, 0 );
  expect( d3 ).toBeTruthy();
  if ( d3 ) {
    expect( d3.toDateString() ).toEqual( cd3.toDateString() );
  }

  const d4 = getBirthDateFromSsn( '24040499268' );
  const cd4 = new Date( 2004, 3, 24, 0, 0, 0, 0 );
  expect( d4 ).toBeTruthy();
  if ( d4 ) {
    expect( d4.toDateString() ).toEqual( cd4.toDateString() );
  }

  const d5 = getBirthDateFromSsn( '01038054070' );
  const cd5 = new Date( 1880, 2, 1, 0, 0, 0, 0 );
  expect( d5 ).toBeTruthy();
  if ( d5 ) {
    expect( d5.toDateString() ).toEqual( cd5.toDateString() );
  }

  const d6 = getBirthDateFromSsn( '01032078806' );
  const cd6 = new Date( 2020, 2, 1, 0, 0, 0, 0 );
  expect( d6 ).toBeTruthy();
  if ( d6 ) {
    expect( d6.toDateString() ).toEqual( cd6.toDateString() );
  }

  const d7 = getBirthDateFromSsn( '07031953000' );
  const cd7 = new Date( 2019, 2, 7, 0, 0, 0, 0 );
  expect( d7 ).toBeTruthy();
  if ( d7 ) {
    expect( d7.toDateString() ).toEqual( cd7.toDateString() );
  }

  const d8 = getBirthDateFromSsn( '41038058167' );
  const cd8 = new Date( 1880, 2, 1, 0, 0, 0, 0 );
  expect( d8 ).toBeTruthy();
  if ( d8 ) {
    expect( d8.toDateString() ).toEqual( cd8.toDateString() );
  }

  const d9 = getBirthDateFromSsn( '64040472086' );
  const cd9 = new Date( 2004, 3, 24, 0, 0, 0, 0 );
  expect( d9 ).toBeTruthy();
  if ( d9 ) {
    expect( d9.toDateString() ).toEqual( cd9.toDateString() );
  }

  const d10 = getBirthDateFromSsn( '47031999088' );
  const cd10 = new Date( 2019, 2, 7, 0, 0, 0, 0 );
  expect( d10 ).toBeTruthy();
  if ( d10 ) {
    expect( d10.toDateString() ).toEqual( cd10.toDateString() );
  }
} );
