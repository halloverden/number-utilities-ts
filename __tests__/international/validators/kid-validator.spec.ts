import { validateKidNumber } from '@international/validators';

test( 'validate() should fail if number is neither Mod11 nor Luhn "compatible"', () => {
  expect( validateKidNumber( '' ) ).toEqual( false );
  expect( validateKidNumber( '51028745503' ) ).toEqual( false );
  expect( validateKidNumber( '51028745509' ) ).toEqual( false );
  expect( validateKidNumber( '51028745504' ) ).toEqual( false );
  expect( validateKidNumber( '51028745505' ) ).toEqual( false );
} );

test( 'validate() should succeed if number is Mod11 "compatible"', () => {
  expect( validateKidNumber( '51028745501' ) ).toEqual( true );
  expect( validateKidNumber( '01028745539' ) ).toEqual( true );
  expect( validateKidNumber( '01028745504' ) ).toEqual( true );
} );

test( 'validate() should succeed if number is Luhn "compatible"', () => {
  expect( validateKidNumber( '51028745506' ) ).toEqual( true );
  expect( validateKidNumber( '01028745535' ) ).toEqual( true );
  expect( validateKidNumber( '01028745501' ) ).toEqual( true );
  expect( validateKidNumber( '1234567897' ) ).toEqual( true );
} );
