import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

const MovieList = ({ foundMovies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.list}>
        {foundMovies.map((movie) => (
          <li className={css.listItem} key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
