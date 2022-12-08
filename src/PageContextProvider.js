import React, { useState, useEffect, createContext } from "react";
import { getArticles, getTitles } from "./API/api";

export const PageContext = createContext();
function PageContextProvider(props) {
  const [articles, setArticles] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
    getTitles().then((data) => {
      setTitles(data);
    });
  }, []);
  return (
    <PageContext.Provider
      value={{
        articles: articles,
        titles: titles,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContextProvider;
