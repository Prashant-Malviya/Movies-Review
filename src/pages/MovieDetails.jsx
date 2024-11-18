import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();

  // Placeholder content
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Details for ID: {id}</h1>
      <p>Detailed information about the movie will go here.</p>
    </div>
  );
};

export default MovieDetailPage;
