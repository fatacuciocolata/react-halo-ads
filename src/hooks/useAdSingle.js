import { useState, useEffect } from "react";

const axios = require("axios");

export default (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const result = await axios(`http://127.0.0.1:8000/api/ads/${id}`);

        setData(result.data.data);

        if (!result.data.success) {
          setError(true);
        }
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
