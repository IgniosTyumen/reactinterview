import React from "react";
import { DataManipulationBad } from "./DataManipulation.bad";
import {generateHugeArray} from "components/DataManipulation/DataManipulation.utils";

export interface HugeDataArrayItem {
  id: number;
  numberA: number;
  numberB: number;
}

export const DataManipulationContainer = () => {
  
  const hugeDataArray: HugeDataArrayItem[] = generateHugeArray(20, 100)
  
  return <DataManipulationBad hugeArray={hugeDataArray} />;
};
