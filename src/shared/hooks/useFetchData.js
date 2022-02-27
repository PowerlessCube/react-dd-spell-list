import React from 'react';

const useFetchData = (url = null) => {
  const [data, setData] = React.useState({});

  const getData = React.useCallback(
    async (url = null) => {
      if (url === null) return;
      try {
        const res = await fetch(url);
        checkForFetchError(res).then(setData);
      } catch (err) {
        throw err;
      }
    },
    [setData]
  );

  const checkForFetchError = (res) => {
    if (!res.ok) throw new Error(`Fetch request failed: ${res.message}`);
    if (res.status <= 199 || res.status >= 299)
      throw new Error(`
        Fetch unsuccessful, status: ${res.status}, 
        message: ${res.message}
      `);
    return res.json();
  };

  React.useEffect(() => {
    getData(url);
  }, [getData, url]);

  return data;
};

export default useFetchData;
