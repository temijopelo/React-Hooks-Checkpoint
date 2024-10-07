"use client";

import Image from "next/image";
import { useState } from "react";
import Filter from "../components/Filter";
import MovieList from "@/components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://example.com/inception.jpg",
      rating: 5,
    },
    {
      title: "The Matrix",
      description: "A sci-fi classic",
      posterURL: "https://example.com/matrix.jpg",
      rating: 4,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovies) => {
    setMovies([...movies, newMovies]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
    );
  });

  return (
    <div>
      <h1>Movie App</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} addMovie={addMovie} />
    </div>
  );
}
