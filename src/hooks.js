import { useState, useEffect } from "react";
import axios from 'axios';

const token = 'H3TM28wjL8R4#HTnqk?c'
const config = {
  headers: { 'x-api-key': token }
}

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url, config);
      setData(result.data);
      setLoading(false)
    };
    fetchData();
  }, []);

  return [data, loading];
}
export { useFetch };