import { useEffect, useState } from "react";

const useStoreFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appsData, setAppsData] = useState([]);
  useEffect(() => {
    if (!url) {
      setIsLoading(false);
      return;
    }
    const controller = new AbortController();

    const fetchingAppData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Data not found ${res.status}`);
        const data = await res.json();
        setAppsData(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchingAppData();
    return () => controller.abort();
  }, [url]);
  return { isLoading, error, appsData };
};
export default useStoreFetch;
