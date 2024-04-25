import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import TvShow from "./pages/TvShow.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="tv-shows/:id" element={<TvShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
