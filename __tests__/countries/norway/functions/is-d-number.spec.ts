import { isDNumber } from '@norway/functions';

test( 'isDNumber() should return false if ssn is shorter than 11 characters', () => {
  expect( isDNumber( '' ) ).toEqual( false );
  expect( isDNumber( '1234' ) ).toEqual( false );
  expect( isDNumber( 'asdf' ) ).toEqual( false );
} );

test( 'isDNumber() should return false for non-d-numbers', () => {
  expect( isDNumber( '01026849914' ) ).toEqual( false );
  expect( isDNumber( '01026846877' ) ).toEqual( false );
  expect( isDNumber( '01026845579' ) ).toEqual( false );
} );

test( 'isDNumber() should return true for d-numbers', () => {
  expect( isDNumber( '41016508878' ) ).toEqual( true );
  expect( isDNumber( '50015902660' ) ).toEqual( true );
  expect( isDNumber( '60017407247' ) ).toEqual( true );
  expect( isDNumber( '70015101871' ) ).toEqual( true );
} );
