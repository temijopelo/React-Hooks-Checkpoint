"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(newMovie);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    });
  };
  return (
    <div>
      <h2>Movies List</h2>
      <div className="flex flex-wrap gap-4 p-5">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <h3 className="text-xl pt-10">Add a New Movie</h3>
      <form className="py-10" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
          className="text-black p-2 mr-4"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
          className="text-black p-2 mr-4"
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
          className="text-black p-2 mr-4"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleChange}
          className="text-black p-2 mr-4"
          min="0"
          max="5"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieList;
