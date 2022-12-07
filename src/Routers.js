import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Articles from "./pages/articles/Articles";
import LandingPage from "./pages/landingPage/LandingPage";
import Topics from "./pages/topics/Topics";
import Users from "./pages/users/Users";

function Routers() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Routers;
