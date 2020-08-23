import { getIndRangeFromYear, ssnFactors } from '@norway/utilities';
import { getMod11ControlDigit } from '@international/utilities';

export function getRandomSsnForDate(date: Date, getDNumber: boolean = false): string | null {
  const d = getDNumber ? date.getDate() + 40 : date.getDate();
  const d1 = d < 10 ? '0' : d.toString(10).charAt(0);
  const d2 = d < 10 ? d.toString(10) : d.toString(10).charAt(1);
  const m = date.getMonth() + 1;
  const m1 = m < 10 ? '0' : m.toString(10).charAt(0);
  const m2 = m < 10 ? m.toString(10) : m.toString(10).charAt(1);
  const y = date.getFullYear();
  const y3 = y.toString(10).charAt(2);
  const y4 = y.toString(10).charAt(3);

  const bdString = d1 + d2 + m1 + m2 + y3 + y4;

  const indRange = getIndRangeFromYear(y);
  if (null === indRange) {
    return null;
  }

  let c1 = 10;
  let c2 = 10;
  let ssnStart = '';
  let indString = '';

  while (10 === c1 || 10 === c2) {
    indString = (Math.floor(Math.random() * (indRange.indEnd - indRange.indStart)) + indRange.indStart).toString(10);
    while (indString.length < 3) {
      indString = '0' + indString;
    }
    ssnStart = bdString + indString;

    let factorSum = 0;

    for (let i = 0; i < ssnFactors.length; i++) {
      factorSum += parseInt(ssnStart.charAt(i), 10) * ssnFactors[i];
    }

    c1 = 11 - (factorSum % 11);

    if (c1 === 11) {
      c1 = 0;
    } else if (c1 === 10) {
      continue;
    }

    const t = getMod11ControlDigit(ssnStart + c1);

    if (null !== t) {
      c2 = t;
    }
  }

  return ssnStart + c1 + c2;
}
