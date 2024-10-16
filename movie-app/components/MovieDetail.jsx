"use client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movieData = {
    Inception: {
      description: "A mind-bending thriller directed by Christopher Nolan.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    "The Matrix": {
      description: "A sci-fi classic directed by the Wachowskis.",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
  };

  const movie = movieData[title];

  if (!movie) {
    return (
      <div className="text-center">
        <div className="text-4xl text-center p-5">Movie not found...</div>

        <button
          onClick={() => navigate("/")}
          className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg my-4">{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={`${title} Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button
        onClick={() => navigate("/")}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default MovieDetail;
