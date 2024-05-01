import { Link } from "react-router-dom";

const MovieSearchedList = ({ foundMovies }) => {
  return (
    <ul>
      {foundMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieSearchedList;
