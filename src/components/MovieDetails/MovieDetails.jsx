import css from "../MovieDetails/MovieDetails.module.css";

const MovieDetails = ({ poster_path, title, vote_average, genres }) => {
  return (
    <div className={css.div}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className={css.content}>
        <h2>{title}</h2>
        <span>User score: {vote_average}</span>
        <h3>Genres</h3>
        <ul className={css.list}>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
