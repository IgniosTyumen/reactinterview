import React, { useEffect, useState } from "react";

interface Component1Props {
  isVisible: boolean;
}

const mockedResponse = "I am data";

export const FakeRequest = (props: Component1Props) => {
  const { isVisible = false } = props;
  const [data, setData] = useState<string | null>(null);
  
  const fetchSomeData = () =>
    new Promise<string>((resolve) => {
      resolve(mockedResponse);
    });
  
  if (!isVisible) {
    return null;
  }
  
  useEffect(() => {
    fetchSomeData().then((response) => setData(response));
  }, []);
  
  return <div>{`I'm component with data: ${data}`}</div>;
};
