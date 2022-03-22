import React, {useEffect, useState} from "react";
import {TimerButton} from "components/TimerButton/TimerButton";

export const TimerButtonContainer = () => {
  const [counter, setCounter] = useState(1);
  
  const handleOnClick = () => {
    setCounter(prevValue => prevValue + 1);
    console.log("new value:", counter);
  };
  
  useEffect(()=>{
    const interval = setInterval(() => {
      setCounter(prevValue => prevValue + 1);
    }, 1000);
    
    return () => {
      clearInterval(interval)
    }
  },[])
  
  
  return (
    <div>
      <TimerButton counter={counter} onClick={handleOnClick} />
    </div>
  );
};
