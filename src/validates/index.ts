export function isNumber(number: any) {
  if (!isNumber) {
    throw new Error(`${number} must be exist`);
  }

  if (Number.isNaN(+number)) return true;
  else throw new Error(`$number} is not a number`);
}
