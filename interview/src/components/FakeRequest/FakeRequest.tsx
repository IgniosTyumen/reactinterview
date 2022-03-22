import React, { useEffect, useState } from "react";
import {fetchFakeData} from './FakeRequest.api'

interface Component1Props {
  isVisible: boolean;
}

export const FakeRequest = (props: Component1Props) => {
  const { isVisible = false } = props;
  const [data, setData] = useState<string | null>(null);
  
  useEffect(() => {
    if (isVisible) {
      fetchFakeData()
        .then((response) => setData(response));
    }
  }, []);
  
  if (!isVisible) {
    return null;
  }
  
  return (
    <div>
      {`I'm component with data: ${data}`}
    </div>
  )
};
