import React from "react";

interface TimerButtonProps {
  counter: number
  onClick: (value: number) => void
}

export const TimerButton = (props: TimerButtonProps) => {
  const {counter, onClick} = props
  
  return (
    <button onClick={()=>onClick(counter)}>
      {counter}
    </button>
  )
}
