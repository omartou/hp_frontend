import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const apiKey =
    "?key=$2a$10$YRrEHkZM8w36IMLDlexdV.vKImwT9ZClX1CDFYaPFtIPYR3zYs8Da";

  useEffect(
    () => {
      setIsLoading(true);
      console.log("Sending http request to URL: " + url + apiKey);

      axios
        .get(url + apiKey)
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
