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
      posterURL:
        "https://miro.medium.com/v2/resize:fit:1400/0*gKT0Cw0ACnsbaejO.jpeg",
      rating: 5,
    },
    {
      title: "The Matrix",
      description: "A sci-fi classic",
      posterURL:
        "https://popcult.blog/wp-content/uploads/2021/12/matrix-banner.png",
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
    <div className="flex flex-col text-center items-center justify-center">
      <h1 className="text-4xl font-black py-10">Movie App</h1>

      <div>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </div>

      <div>
        <MovieList movies={filteredMovies} addMovie={addMovie} />
      </div>
    </div>
  );
}
