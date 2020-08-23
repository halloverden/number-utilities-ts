import { validateSsn } from '@norway/validators';

test( 'valdate() should fail for input that does not follow the proper pattern for ssn', () => {
  expect( validateSsn( '' ) ).toEqual( false );
  expect( validateSsn( '1234' ) ).toEqual( false );
  expect( validateSsn( 'asdf' ) ).toEqual( false );
  expect( validateSsn( 'asdf1234' ) ).toEqual( false );
} );

test( 'validate() should succeed for valid ssn', () => {
  expect( validateSsn( '01028749879' ) ).toEqual( true );
  expect( validateSsn( '01028749364' ) ).toEqual( true );
  expect( validateSsn( '01026847822' ) ).toEqual( true );
  expect( validateSsn( '01026849590' ) ).toEqual( true );
} );

test( 'validate() should succeed for valid d-number', () => {
  expect( validateSsn( '41016508878' ) ).toEqual( true );
  expect( validateSsn( '50015902660' ) ).toEqual( true );
  expect( validateSsn( '60017407247' ) ).toEqual( true );
  expect( validateSsn( '70015101871' ) ).toEqual( true );
} );
