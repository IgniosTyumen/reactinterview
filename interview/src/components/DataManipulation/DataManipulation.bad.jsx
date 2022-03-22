import React, { useEffect } from "react";

export const DataManipulationBad = (props) => {
  const { hugeArray } = props;

  for (const item of hugeArray) {
    item.sum = item.numberA + item.numberB;
  }

  const fakePostRequest = () => {
    console.log(hugeArray);
  };

  useEffect(fakePostRequest);

  return (
    <div>
      {hugeArray.map((item) => (
        <div>
          {item.sum}={item.numberA}+{item.numberB}
        </div>
      ))}
    </div>
  );
};
