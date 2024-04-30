import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom

const TrendingMovieItem = ({ movie }) => {
  return (
    <li>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
};

export default TrendingMovieItem;
