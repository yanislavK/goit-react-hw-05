import MovieDetails from "../../components/MovieDetails/MovieDetails";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import { fetchMovieById } from "../../../api/api.js";
import { useState, useEffect } from "react";
import css from "../MoviesDetailsPage/MoviesDetailsPage.module.css";

const MoviesDetailsPage = () => {
  const [movieById, setMovieById] = useState(null);

  const params = useParams();
  const movieId = params.movieId;
  const location = useLocation();

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

  if (!movieById) {
    return <div>Loading</div>;
  }

  return (
    <div className={css.pageCont}>
      <Link className={css.backLink} to={location.state}>
        Go back
      </Link>
      <MovieDetails {...movieById} />
      <NavLink className={css.links} state={location.state} to="cast">
        Cast overview
      </NavLink>
      <NavLink className={css.links} state={location.state} to="reviews">
        Review
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MoviesDetailsPage;
