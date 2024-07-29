// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findById = (array: any, id: string) =>
  array.find((item: { id: string }) => item.id === id);
