"use client";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleNav = (title) => {
    navigate(`/movies/${title}`);
  };
  return (
    <div
      className="cursor-pointer w-[30%] p-10 rounded-4xl shadow-2xl bg-[#0e0319] transition-all hover:scale-110 hover:transition-all ease-in
   "
      onClick={() => handleNav(movie.title)}
    >
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/5</p>
    </div>
  );
};

export default MovieCard;
