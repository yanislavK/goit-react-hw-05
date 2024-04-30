import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { useState } from "react";

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearch = (search) => {
    setSearchMovie(search);
  };

  return <MovieSearch onSubmit={handleSearch} />;
};

export default MoviesPage;
