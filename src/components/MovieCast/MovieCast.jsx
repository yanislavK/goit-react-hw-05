import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../../api/api.js";
import { useParams } from "react-router-dom";
import css from "../MovieCast/MovieCast.module.css";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);

  const params = useParams();
  const movieId = params.movieId;

  async function fetchMovieCastById() {
    try {
      const data = await fetchMovieCast(movieId);
      setMovieCast(data);
    } catch (error) {
      console.error("Error fetching movie cast:", error);
    }
  }

  useEffect(() => {
    fetchMovieCastById();
  }, []);

  if (!movieCast) {
    return <div>Loading</div>;
  }

  const limitedCast = movieCast.slice(0, 5);

  return (
    <ul className={css.ul}>
      {limitedCast.length > 0 ? (
        limitedCast.map((movie) => (
          <li className={css.li} key={movie.id}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
              alt={`${movie.name} profile`}
            />
            <h3>Name: {movie.name}</h3>
            <h3>Character: {movie.character}</h3>
          </li>
        ))
      ) : (
        <p>No overviews found</p>
      )}
    </ul>
  );
};

export default MovieCast;
