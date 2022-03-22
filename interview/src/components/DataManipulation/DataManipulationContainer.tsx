import React from "react";
import {generateHugeArray} from "components/DataManipulation/DataManipulation.utils";
import {DataManipulation} from "components/DataManipulation/DataManipulation";

export interface HugeDataArrayItem {
  id: number;
  numberA: number;
  numberB: number;
}

export const DataManipulationContainer = () => {
  
  const hugeDataArray: HugeDataArrayItem[] = generateHugeArray(20, 100)
  
  return <DataManipulation hugeArray={hugeDataArray} />;
};
