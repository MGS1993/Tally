import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);
      setError(false);
      setData(response);
    } catch (error) {
      console.log("error in useAPi hook:", error);
      return setError(true);
    }
  };

  return { data, setData, error, loading, request, addToList };
};

export default useApi;
