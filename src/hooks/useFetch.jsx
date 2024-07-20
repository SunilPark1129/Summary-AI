import React, { useEffect, useState } from "react";
import axios from "axios";

const PORT = import.meta.env.SERVER_ADDRESS && "http://localhost:5000";

function useFetch() {
  const [prompt, setPrompt] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function callFetch() {
    axios
      .post(`${PORT}/openai/vision`, {
        prompt: prompt.prompt,
        lang: prompt.lang,
      })
      .then((res) => {
        setData(res.data.data.response.message.content);
        setPrompt(null);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setData(null);
        setPrompt(null);
        setIsLoading(false);
        if (!err.response) {
          return setError(String(err));
        }
        if (err.response.status === 400) {
          setError(err.response.data.error);
        } else {
          setError(String(err));
        }
      });
  }

  useEffect(() => {
    if (prompt) {
      callFetch();
    }
  }, [prompt]);

  function requestFetch(files, lang) {
    setIsLoading(true);
    setPrompt({ prompt: files, lang: lang });
  }

  return { requestFetch, data, isLoading, error };
}

export default useFetch;
