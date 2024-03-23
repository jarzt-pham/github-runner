export function isNumber(number: any) {
  if (!number) {
    throw new Error(`number must be exist`);
  }

  if (Number.isNaN(+number)) throw new Error(`${number} is not a number`);

  return true;
}
