export function isNinPattern(nin: string): boolean {
  return new RegExp(/^[0-9]{11}$/).test(nin);
}
