import { validateOrganizationNumber } from '@norway/validators';

test( 'validate() should fail if input does not follow the allowed organization number pattern', () => {
  expect( validateOrganizationNumber( '' ) ).toEqual( false );
  expect( validateOrganizationNumber( 'asdf' ) ).toEqual( false );
  expect( validateOrganizationNumber( '1234' ) ).toEqual( false );
  expect( validateOrganizationNumber( '651651651651' ) ).toEqual( false );
  expect( validateOrganizationNumber( '651651651651' ) ).toEqual( false );
} );

test( 'validate() should succeed for valid organization numbers', () => {
  expect( validateOrganizationNumber( '922171920' ) ).toEqual( true );
  expect( validateOrganizationNumber( '922138079' ) ).toEqual( true );
  expect( validateOrganizationNumber( '976107268' ) ).toEqual( true );
  expect( validateOrganizationNumber( '918921672' ) ).toEqual( true );
  expect( validateOrganizationNumber( '811714682' ) ).toEqual( true );
  expect( validateOrganizationNumber( '916330561' ) ).toEqual( true );
} );

test( 'validate() should accept spaces in the incoming number', () => {
  expect( validateOrganizationNumber( '922 171 920' ) ).toEqual( true );
  expect( validateOrganizationNumber( '922 1380 79' ) ).toEqual( true );
  expect( validateOrganizationNumber( '976 10726 8' ) ).toEqual( true );
  expect( validateOrganizationNumber( '918 9 21672' ) ).toEqual( true );
  expect( validateOrganizationNumber( '811 71 4682' ) ).toEqual( true );
  expect( validateOrganizationNumber( '916 330 561' ) ).toEqual( true );
} );
