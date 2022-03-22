import {HugeDataArrayItem} from "components/DataManipulation/DataManipulationContainer";

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

interface HugeDataArrayItemWithSum extends HugeDataArrayItem {
  sum: number
}

export const createSumHugeArray = (hugeArray: HugeDataArrayItem[]) => {
  return hugeArray.reduce((accelerator, current) => {
    return [...accelerator, {...current, sum: current.numberA + current.numberB}]
  },[] as HugeDataArrayItemWithSum[])
}

export const fakePostRequest = (requestBody: HugeDataArrayItemWithSum[]) => {
  return new Promise(resolve => {
    console.log(requestBody)
    resolve(requestBody)
  })
};
