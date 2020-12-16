import { useState, useEffect } from "react";
const axios = require("axios");

export default (term) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (term.length === 0) {
          const result = await axios("http://127.0.0.1:8000/api/ads");
        }
        const result = await axios(
          `http://localhost:8000/api/search?term=${term}`
        );
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
  }, [term]);

  return {
    data,
    isLoading,
    error,
  };
};
