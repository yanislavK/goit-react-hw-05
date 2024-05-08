import { Link, useLocation } from "react-router-dom";

const TrendingMovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li>
      <Link state={location} to={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </li>
  );
};

export default TrendingMovieItem;
