import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { useParams } from "react-router-dom";
import { fetchMovieById, fetchMovieCast } from "../../../api/api.js";
import { useState, useEffect } from "react";
import MovieCast from "../../components/MovieCast/MovieCast.jsx";

const MoviesDetailsPage = () => {
  const [movieById, setMovieById] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [isCastClicked, setIsCastClicked] = useState(false);

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

  async function fetchMovieCastById() {
    try {
      const data = await fetchMovieCast(movieId);
      setMovieCast(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    fetchMovieCastById();
  }, []);

  function handleCastClick() {
    setIsCastClicked(true);
  }

  function handleCloseCast() {
    setIsCastClicked(false);
  }

  if (!movieById) {
    return <div>Loading</div>;
  }

  return (
    <>
      <MovieDetails {...movieById} />
      <button onClick={isCastClicked ? handleCloseCast : handleCastClick}>
        Cast overview
      </button>
      {isCastClicked && <MovieCast movieCast={movieCast} />}
    </>
  );
};

export default MoviesDetailsPage;
