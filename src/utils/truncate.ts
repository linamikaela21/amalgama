export const truncate = (string: string, number: number) => {
  if (string.length <= number) {
    return string;
  }
  return string.slice(0, number) + '...';
};
