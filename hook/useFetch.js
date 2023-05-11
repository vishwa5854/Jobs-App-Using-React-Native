import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "883a7fb750msh9ec50e4ff1b1477p193e1cjsn563e5a8f8f54",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);

      setData(res.data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      alert("There is an error while fetching");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
