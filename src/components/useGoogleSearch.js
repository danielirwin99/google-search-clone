import React from "react";
import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "33288f3f4bf834fc8";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null)


  useEffect (() => {

  },[term])

  return <div>useGoogleSearch</div>;
};

export default useGoogleSearch;
