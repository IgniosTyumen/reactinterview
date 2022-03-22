export const generateHugeArray = (length: number, maxNumber: number) => {
  return new Array(10)
    .fill(0)
    .map((_, index) => ({
      id: index,
      numberA: randomMax(maxNumber),
      numberB: randomMax(maxNumber)
    }));
}

export const randomMax = (max: number) => {
  return  Math.round(Math.random() * max);
}
