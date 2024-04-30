import TrendingMovieItem from "../TrendingMovieItem/TrendingMovieItem";
import css from "../TrendingMoviesList/TrendingMoviesList.module.css";

const TrendingMoviesList = ({ trendingMovies }) => {
  return (
    <div>
      <h1 className={css.ul}>Trending today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <TrendingMovieItem key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default TrendingMoviesList;
