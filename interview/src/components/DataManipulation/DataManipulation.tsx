import React, {useEffect} from "react";
import {HugeDataArrayItem} from "components/DataManipulation/DataManipulationContainer";
import {createSumHugeArray, fakePostRequest} from "components/DataManipulation/DataManipulation.utils";

interface HugeDataArrayItemProps {
  hugeArray: HugeDataArrayItem[]
}

export const DataManipulation = (props: HugeDataArrayItemProps) => {
  const { hugeArray } = props;
  
  const newArray = createSumHugeArray(hugeArray)
  
  useEffect(()=>{
    fakePostRequest(newArray)
  },[]);
  
  return (
    <div>
      {newArray.map((item) => (
        <div>
          {item.sum}={item.numberA}+{item.numberB}
        </div>
      ))}
    </div>
  );
  
}
