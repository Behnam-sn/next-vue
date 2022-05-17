export function zeroPad(input: number) {
  return ("0" + Math.floor(input)).slice(-2);
}
