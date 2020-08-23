import { getIndRangeFromYear } from '@norway/utilities';

test( 'getIndRangeFromYear() should return null for invalid year', () => {
  expect( getIndRangeFromYear( 123 ) ).toBeNull();
  expect( getIndRangeFromYear( 12300 ) ).toBeNull();
  expect( getIndRangeFromYear( 1 ) ).toBeNull();
  expect( getIndRangeFromYear( 4312 ) ).toBeNull();
  expect( getIndRangeFromYear( -5 ) ).toBeNull();
  expect( getIndRangeFromYear( 1802 ) ).toBeNull();
} );

test( 'getIndRangeFromYear() should return valid indRange for valid year', () => {
  const eStart1 = 0;
  const eEnd1 = 499;
  const range1 = getIndRangeFromYear( 1900 );
  expect( range1 ).toBeTruthy();
  if ( range1 ) {
    expect( range1.indStart ).toEqual( eStart1 );
    expect( range1.indEnd ).toEqual( eEnd1 );
  }

  const eStart2 = 500;
  const eEnd2 = 749;
  const range2 = getIndRangeFromYear( 1860 );
  expect( range2 ).toBeTruthy();
  if ( range2 ) {
    expect( range2.indStart ).toEqual( eStart2 );
    expect( range2.indEnd ).toEqual( eEnd2 );
  }

  const eStart3 = 500;
  const eEnd3 = 999;
  const range3 = getIndRangeFromYear( 2005 );
  expect( range3 ).toBeTruthy();
  if ( range3 ) {
    expect( range3.indStart ).toEqual( eStart3 );
    expect( range3.indEnd ).toEqual( eEnd3 );
  }

  const eStart4 = 0;
  const eEnd4 = 999;
  const range4 = getIndRangeFromYear( 1999 );
  expect( range4 ).toBeTruthy();
  if ( range4 ) {
    expect( range4.indStart ).toEqual( eStart4 );
    expect( range4.indEnd ).toEqual( eEnd4 );
  }

  const eStart5 = 0;
  const eEnd5 = 999;
  const range5 = getIndRangeFromYear( 1975 );
  expect( range5 ).toBeTruthy();
  if ( range5 ) {
    expect( range5.indStart ).toEqual( eStart5 );
    expect( range5.indEnd ).toEqual( eEnd5 );
  }

  const eStart6 = 500;
  const eEnd6 = 999;
  const range6 = getIndRangeFromYear( 2020 );
  expect( range6 ).toBeTruthy();
  if ( range6 ) {
    expect( range6.indStart ).toEqual( eStart6 );
    expect( range6.indEnd ).toEqual( eEnd6 );
  }

  const eStart7 = 0;
  const eEnd7 = 999;
  const range7 = getIndRangeFromYear( 1980 );
  expect( range7 ).toBeTruthy();
  if ( range7 ) {
    expect( range7.indStart ).toEqual( eStart7 );
    expect( range7.indEnd ).toEqual( eEnd7 );
  }
} );
