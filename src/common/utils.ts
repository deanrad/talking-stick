export const randomId = (length: number = 7) => {
  return Math.floor(Math.pow(2, length * 4) * Math.random())
    .toString(16)
    .padStart(length, '0');
};