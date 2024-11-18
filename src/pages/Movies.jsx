import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../redux/slice/searchSlice";
import axios from "axios";
import { api_url } from "../api/api";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, searchTerm } = useSelector((state) => state.search);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(api_url);
      dispatch(setMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.movie.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Database</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-center col-span-full">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Movies;