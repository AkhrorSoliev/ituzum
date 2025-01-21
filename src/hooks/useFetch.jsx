import { axiosInstance } from "../utils";
import { useCallback, useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = useCallback(async () => {
    setIsPending(true);
    try {
      const res = await axiosInstance(url);
      const data = res.data;
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isPending };
}
