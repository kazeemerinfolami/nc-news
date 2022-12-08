import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "../PageContextProvider";

function Body({ children, pageName }) {
  const [mode, setMode] = useState("light");
  const { userDataLocalStorage, ifLoggedin } = useContext(PageContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  };

  return (
    <div className="container">
      <main
        className={
          mode === "light"
            ? "container-body light-mode"
            : "container-body dark-mode"
        }
      >
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "isActive" : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  isActive ? "isActive" : undefined
                }
              >
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topics"
                className={({ isActive }) =>
                  isActive ? "isActive" : undefined
                }
              >
                Topics
              </NavLink>
            </li>
          </ul>
          <ul>
            {mode === "light" ? (
              <li
                onClick={() => {
                  setMode("dark");
                }}
              >
                🌚
              </li>
            ) : (
              <li
                onClick={() => {
                  setMode("light");
                }}
              >
                ☀️
              </li>
            )}
            {ifLoggedin ? (
              <li className="username">
                {userDataLocalStorage ? (
                  <img
                    className="icon-img"
                    src={userDataLocalStorage.avatar_url}
                    alt={userDataLocalStorage.name}
                  />
                ) : null}
                {userDataLocalStorage ? (
                  <h4>{userDataLocalStorage.name}</h4>
                ) : (
                  "Username"
                )}
              </li>
            ) : (
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive ? "isActive" : undefined
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
            {ifLoggedin ? (
              <li className="logout" onClick={handleLogout}>
                Logout
              </li>
            ) : null}
          </ul>
        </nav>
        <main className="container-main_body">
          <h1 className="container-page_name">{pageName}</h1>
          {children}
        </main>
      </main>
    </div>
  );
}

export default Body;
