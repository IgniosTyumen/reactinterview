import React from 'react';
import {DataManipulationContainer} from "components/DataManipulation";
import {FakeRequest} from "components/FakeRequest";
import {TimerButtonContainer} from "components/TimerButton";
import {OrderTaskContainer, PositionTask} from "components/CssTasks";

export const App = () => {
  return (
    <>
      {/*<OrderTaskContainer />*/}
      <PositionTask />
      {/*<FakeRequest isVisible={true} />*/}
      {/*<DataManipulationContainer />*/}
      {/*<TimerButtonContainer />*/}
    </>
  );
}
