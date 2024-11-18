import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={movie.image}
        alt={movie.movie}
        className="h-64 w-full object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{movie.movie}</h2>
      <p className="text-gray-500">Rating: {movie.rating}</p>
      <a
        href={movie.imdb_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        View on IMDb
      </a>
    </div>
  );
};

export default MovieCard;
