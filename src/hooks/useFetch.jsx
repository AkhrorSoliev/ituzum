import { axiosInstance } from "../utils";
import { useCallback, useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsPending(true);
      const res = await axiosInstance(url);
      const data = res.data;
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsPending(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isPending };
}
