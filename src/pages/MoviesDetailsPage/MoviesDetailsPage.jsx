import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../../api/api.js";
import { useState, useEffect } from "react";

const MoviesDetailsPage = () => {
  const [movieById, setMovieById] = useState(null);
  const params = useParams();
  const movieId = params.movieId;

  async function fetchMovieDetails() {
    try {
      const data = await fetchMovieById(movieId);
      setMovieById(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  console.log(movieById);
  if (!movieById) {
    return <div>Loading</div>;
  }

  return <MovieDetails {...movieById} />;
};

export default MoviesDetailsPage;
