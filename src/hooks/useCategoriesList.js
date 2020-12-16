import { useState, useEffect } from "react";
const axios = require("axios");

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await axios("http://127.0.0.1:8000/api/categories");

        if (result.data.success) {
          setData(result.data.data);
        }

        if (!result.data.success) {
          setError(true);
        }
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
