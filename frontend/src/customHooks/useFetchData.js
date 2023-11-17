import { useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url, setData, setError) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        setError(`Error fetching data from ${url}`);
      }
    };

    fetchData();
  }, [url, setData, setError]);
};

export default useFetchData;
