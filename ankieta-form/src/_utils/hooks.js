import React, { useState, useEffect } from "react";
import { ResponseStatus } from "./enums";

const apiURL = 'https://webankieta.adamdev.it'

export function useFetch(_endpoint, opts) {
  const [endpoint, setEndpoint] = useState(_endpoint)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (endpoint != null) {
      setLoading(true)
      fetch(`${apiURL}/${endpoint}`, opts)
        .then(async (response) => {
          if (response.ok && response.status === ResponseStatus.SUCCESS) {
            const responseData = await response.json();
            setData(responseData)
            setLoading(false)
            setEndpoint(null)
            return responseData;
          }
          else
            throw response.statusText;

        }).catch((err) => {
          setHasError(true)
          setLoading(false)
          setEndpoint(null)
        });
    }
  }, [endpoint])
  return [data, loading, hasError, setEndpoint]
}
