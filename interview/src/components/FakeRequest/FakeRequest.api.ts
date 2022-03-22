const mockedResponse = "I am data";

export const fetchFakeData = () =>
  new Promise<string>((resolve) => {
    setTimeout(()=>{
      resolve(mockedResponse);
    },5000)
  });
