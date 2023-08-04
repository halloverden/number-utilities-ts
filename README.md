# number-utilities-ts

Typescript library with utility functions for a bunch of numbers:

- Norwegian account number validation
- Norwegian organization number validation
- Norwegian nin validation (supports D-numbers, H-numbers and 'synthetic nin' from the Norwegian Population Registry (
  Folkeregisteret))
- KID number validation

## Installation
`npm i --save @halloverden/number-utilities-ts`

## The `NinEntity`
The `NinEntity` expects a valid nin, and will throw an error if the given nin is invalid. If you want to validate a nin
without trying to create an instance of `NinEntity`, use the `validateNin` function instead.

```javascript
try {
  let nin = new NinEntity('12345678912');
} catch (e) {
  // invalid nin
}

// Get the nin type (see NinTypeEnum)
nin.type

// Get the nin as a string
nin.nin

// Check nin is of the regular type
nin.isRegularNin()

// Check if nin is D-number
nin.isDNumber()

// Check if nin is H-number
nin.isHNumber()

// Check if nin is of the synthetic type
nin.isNprSyntheticNin()

// Check if nin is male-pattern
nin.isMaleNinPattern()

// Check if nin is female-pattern
nin.isFemaleNinPattern()
```

## The `NinTypeEnum`
Types of nin that are supported by the package

## Standalone functions
The package comes with a bunch of standalone utility functions. See the type declaration files for documentation.
- `checkDate(year: number, month: number, day: number): boolean`
- `checkLuhnControlDigit(input: string): boolean`
- `checkLuhnControlDigits(input: string, numberOfDigits: number): boolean`
- `generateEveryNinForDate(date: Date): NinListEntity`
- `getBirthDateFromNin(ninEntity: NinEntity): Date`
- `getDayFromNin(ninEntity: NinEntity): number`
- `getDefaultMod11WeightsForLength(length: number): number[]`
- `getIndRangesFromYear(year: number, type: NinTypeEnum = NinTypeEnum.TYPE_REGULAR_NIN): IndRange[]`
- `getLuhnControlDigit(input: string): number`
- `getLuhnControlDigits(input: string, numberOfDigits: number): number[]`
- `getMod11ControlDigit(input: string, weights: number[], acceptedRemainders = [0], onRemainder1 = '-'): string`
- `getMod11ControlDigits(input: string, numberOfDigits: number, throwIfOne = true): string[]`
- `getMonthFromNin(ninEntity: NinEntity): number`
- `getNinIndividualNumberRangeMappingTypesFromInd(ind: number, type: NinTypeEnum = NinTypeEnum.TYPE_REGULAR_NIN): NinIndividualNumberRangeMappingType[]`
- `getRandomNinForDate(date: Date, type: NinTypeEnum = NinTypeEnum.TYPE_REGULAR_NIN): NinEntity`
- `getRandomNumberFromRange(min: number, max: number): number`
- `getYearFromNin(nin: string): number`
- `getYearFromNinEntity(ninEntity: NinEntity): number`
- `getYearRangesFromInd(ind: number, type: NinTypeEnum = NinTypeEnum.TYPE_REGULAR_NIN): YearRange[]`
- `isDNumberPattern(nin: string): boolean`
- `isFemaleNinPattern(nin: string): boolean`
- `isHNumberPattern(nin: string): boolean`
- `isMaleNinPattern(nin: string): boolean`
- `isNinPattern(nin: string): boolean`
- `isNprSyntheticNinPattern(nin: string): boolean`
- `isRegularNinPattern(nin: string): boolean`
- `validateAccountNumber(accountNumber: string): boolean`
- `validateKidNumber(kidNumber: string): boolean`
- `validateNin(nin: string): boolean`
- `validateOrganizationNumber(orgNumber: string): boolean`
- `zeroPadding(value: string, length = 2): string`

## Test & build

Test with `npm run test`

Build with `npm run build`
