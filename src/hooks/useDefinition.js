import axios from "axios";
import { useEffect, useState } from "react";

function useDefinition(word) {
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setInfo(null);
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setInfo(response.data[0]);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    if (word) {
      fetchData();
    } else {
      setInfo(null);
      setError(null);
      setIsLoading(false);
    }
  }, [word]);

  return { info, isLoading, error };
}

export default useDefinition;
