import React, { useState } from "react";
import {TimerButton} from "components/TimerButton/TimerButton";

export const TimerButtonContainer = () => {
  const [counter, setCounter] = useState(1);
  
  const handleOnClick = (value: number) => {
    setCounter(counter + 1);
    console.log("new value:", value);
  };
  
    setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
  
  return (
    <div>
      <TimerButton counter={counter} onClick={handleOnClick} />
    </div>
  );
};
