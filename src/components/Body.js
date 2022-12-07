import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Body({ children, pageName }) {
  const [ifLoggedin, setifLoggedin] = useState(!false);
  const [mode, setMode] = useState("");

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
              <li>
                <Link>userName</Link>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive ? "isActive" : undefined
                  }
                >
                  Users/login
                </NavLink>
              </li>
            )}
            {ifLoggedin ? (
              <li>
                <Link>logout</Link>
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
