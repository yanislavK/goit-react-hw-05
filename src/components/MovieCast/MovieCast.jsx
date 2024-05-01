const MovieCast = ({ movieCast }) => {
  console.log(movieCast, "movieCast уже тут");
  const limitedCast = movieCast.slice(0, 5);
  return (
    <ul>
      {limitedCast?.map((movie) => (
        <li key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
            alt={`${movie.name} profile`}
          />
          <h3>Name: {movie.name}</h3>
          <h3>Character: {movie.character}</h3>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
