import { getRandomSsnForDate } from '@norway/functions';
import { validateSsn } from '@norway/validators';

test( 'getRandomSsnForDate() should return a valid ssn or D-number for the given date object', () => {
  const d1 = new Date( 1968, 1, 1, 0, 0, 0, 0 );
  const ssn1 = getRandomSsnForDate( d1 );
  const dn1 = getRandomSsnForDate( d1, true );
  expect( ssn1 ).toBeTruthy();
  expect( dn1 ).toBeTruthy();
  if ( ssn1 ) {
    expect( validateSsn( ssn1 ) ).toEqual( true );
  }
  if ( dn1 ) {
    expect( validateSsn( dn1 ) ).toEqual( true );
  }

  const d2 = new Date( 1854, 1, 1, 0, 0, 0, 0 );
  const ssn2 = getRandomSsnForDate( d2 );
  const dn2 = getRandomSsnForDate( d2, true );
  expect( ssn2 ).toBeTruthy();
  expect( dn2 ).toBeTruthy();
  if ( ssn2 ) {
    expect( validateSsn( ssn2 ) ).toEqual( true );
  }
  if ( dn2 ) {
    expect( validateSsn( dn2 ) ).toEqual( true );
  }

  const d3 = new Date( 1910, 1, 1, 0, 0, 0, 0 );
  const ssn3 = getRandomSsnForDate( d3 );
  const dn3 = getRandomSsnForDate( d3, true );
  expect( ssn3 ).toBeTruthy();
  expect( dn3 ).toBeTruthy();
  if ( ssn3 ) {
    expect( validateSsn( ssn3 ) ).toEqual( true );
  }
  if ( dn3 ) {
    expect( validateSsn( dn3 ) ).toEqual( true );
  }

  const d4 = new Date( 2004, 3, 24, 0, 0, 0, 0 );
  const ssn4 = getRandomSsnForDate( d4 );
  const dn4 = getRandomSsnForDate( d4, true );
  expect( ssn4 ).toBeTruthy();
  expect( dn4 ).toBeTruthy();
  if ( ssn4 ) {
    expect( validateSsn( ssn4 ) ).toEqual( true );
  }
  if ( dn4 ) {
    expect( validateSsn( dn4 ) ).toEqual( true );
  }

  const d5 = new Date( 1880, 2, 1, 0, 0, 0, 0 );
  const ssn5 = getRandomSsnForDate( d5 );
  const dn5 = getRandomSsnForDate( d5, true );
  expect( ssn5 ).toBeTruthy();
  expect( dn5 ).toBeTruthy();
  if ( ssn5 ) {
    expect( validateSsn( ssn5 ) ).toEqual( true );
  }
  if ( dn5 ) {
    expect( validateSsn( dn5 ) ).toEqual( true );
  }

  const d6 = new Date( 2020, 2, 1, 0, 0, 0, 0 );
  const ssn6 = getRandomSsnForDate( d6 );
  const dn6 = getRandomSsnForDate( d6, true );
  expect( ssn6 ).toBeTruthy();
  expect( dn6 ).toBeTruthy();
  if ( ssn6 ) {
    expect( validateSsn( ssn6 ) ).toEqual( true );
  }
  if ( dn6 ) {
    expect( validateSsn( dn6 ) ).toEqual( true );
  }

  const d7 = new Date( 1950, 2, 1, 0, 0, 0, 0 );
  const ssn7 = getRandomSsnForDate( d7 );
  const dn7 = getRandomSsnForDate( d7, true );
  expect( ssn7 ).toBeTruthy();
  expect( dn7 ).toBeTruthy();
  if ( ssn7 ) {
    expect( validateSsn( ssn7 ) ).toEqual( true );
  }
  if ( dn7 ) {
    expect( validateSsn( dn7 ) ).toEqual( true );
  }
} );
