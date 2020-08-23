import { isHNumber } from '@norway/functions';

test( 'isHNumber() should return false if ssn is shorter than 11 characters', () => {
  expect( isHNumber( '' ) ).toEqual( false );
  expect( isHNumber( '1234' ) ).toEqual( false );
  expect( isHNumber( 'asdf' ) ).toEqual( false );
} );

test( 'isHNumber() should return false for non-d-numbers', () => {
  expect( isHNumber( '01026849914' ) ).toEqual( false );
  expect( isHNumber( '01026846877' ) ).toEqual( false );
  expect( isHNumber( '01026845579' ) ).toEqual( false );
} );

test( 'isHNumber() should return true for d-numbers', () => {
  expect( isHNumber( '01416508878' ) ).toEqual( true );
  expect( isHNumber( '10515902660' ) ).toEqual( true );
  expect( isHNumber( '20417407247' ) ).toEqual( true );
  expect( isHNumber( '30515101871' ) ).toEqual( true );
} );
