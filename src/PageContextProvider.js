import React, { useState, useEffect, createContext } from "react";
import { getArticles, getTitles, getUsers } from "./API/api";

export const PageContext = createContext();

function PageContextProvider(props) {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [titles, setTitles] = useState([]);
  const [ifLoggedin, setifLoggedin] = useState(false);
  const [userDataLocalStorage, setUserDataLocalStorage] = useState({});

  useEffect(() => {
    var dataStored = JSON.parse(localStorage.getItem("user"));
    setUserDataLocalStorage(dataStored);
    if (dataStored) {
      setifLoggedin(true);
    }

    getArticles().then((data) => {
      setArticles(data);
    });
    getUsers().then((data) => {
      setUsers(data);
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
        users: users,
        ifLoggedin: ifLoggedin,
        userDataLocalStorage: userDataLocalStorage,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContextProvider;
