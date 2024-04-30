import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../../api/api.js";
import { useState, useEffect } from "react";

const MoviesDetailsPage = () => {
  const [movieById, setMovieById] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await fetchMovieById(movieId);
        setMovieById(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  console.log("MovideByID", movieById);

  return (
    <>
      <MovieDetails />
    </>
  );
};

export default MoviesDetailsPage;
