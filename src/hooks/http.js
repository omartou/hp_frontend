import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(
    () => {
      setIsLoading(true);
      console.log("Sending http request to URL" + url);
      axios
        .get(url)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch.");
          }
          return res.data;
        })
        .then((data) => {
          setIsLoading(false);
          setFetchedData(data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    },
    [url],
    dependencies
  );
  return [isLoading, fetchedData];
};
