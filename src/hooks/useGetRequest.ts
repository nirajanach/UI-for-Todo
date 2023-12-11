import { useEffect, useState } from "react";
import LOCAL_STORAGE_AUTH_KEY from "../constants/LocalStorageKeys";
import axios from "axios";

const useGetRequest = (url: string, auth = true) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const requestOptions = auth
          ? {
              headers: {
                Authorization: `Bearer ${window.localStorage.getItem(
                  LOCAL_STORAGE_AUTH_KEY
                )}`,
              },
            }
          : undefined;
        const response = await axios.get(url, requestOptions);
        const { data } = response;
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        setData(undefined);
      }
    };

    fetchData();
  }, [url, auth]);

  return [data, loading, error];
};

export default useGetRequest;
