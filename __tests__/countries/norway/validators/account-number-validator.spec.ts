import { validateAccountNumber } from '@norway/validators';

test( 'validate() should fail if input does not follow valid account number pattern', () => {
  expect( validateAccountNumber( '1234' ) ).toEqual( false );
  expect( validateAccountNumber( '1234.23..212312312' ) ).toEqual( false );
  expect( validateAccountNumber( '123423212312312' ) ).toEqual( false );
  expect( validateAccountNumber( '1234230' ) ).toEqual( false );
} );

test( 'validate() should fail if input is not a valid account number', () => {
  expect( validateAccountNumber( '73256545373' ) ).toEqual( false );
  expect( validateAccountNumber( '7325.65.45373' ) ).toEqual( false );
} );

test( 'validate() should succeed if input is a valid account number', () => {
  expect( validateAccountNumber( '73251223650' ) ).toEqual( true );
  expect( validateAccountNumber( '7325.12.23650' ) ).toEqual( true );
} );
