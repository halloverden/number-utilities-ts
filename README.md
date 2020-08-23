# number-utilities-ts

Typescript library with utility functions for a bunch of numbers:
- Norwegian account number validation
- Norwegian organization number validation
- Norwegian social security number validation (supports D-numbers)
- KID number validation

Includes the following utility functions:
- Generate one or more Luhn control digits for given number
- Check if a given number has a valid Luhn control digit
- Generate one or more Mod11 control digits for given number
- Check if a given number has a valid Mod11 control digit
- Get valid individual number range for a Norwegian ssn with the given birth year
- Get the correct birth date for a given Norwegian ssn or D-number
- Generate a random valid Norwegian ssn or D-number for a given date
- Generate every valid Norwegian ssn for a given date
- Check if a given Norwegian ssn is a D-number
- Check if a given Norwegian ssn is an H-number


Test with `npm run test`

Build with `npm run build`

Install with `npm i --save @halloverden/number-utilities-ts` or `yarn add @halloverden/number-utilities-ts`
