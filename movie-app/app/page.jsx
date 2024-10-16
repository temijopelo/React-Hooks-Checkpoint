"use client";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import MovieDetail from "../components/MovieDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:title" element={<MovieDetail />} />
    </Routes>
  );
}
