import { useEffect, useState } from "react";
import { searchMovieByName } from "../../../api/api.js";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieSearchedList from "../../components/MovieSearchedList/MovieSearchedList.jsx";

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);

  const handleSearch = (search) => {
    setSearchMovie(search);
  };

  async function fetchSearchedMovies() {
    try {
      const data = await searchMovieByName(searchMovie);
      setFoundMovies(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }

  useEffect(() => {
    if (searchMovie.trim() !== "") {
      fetchSearchedMovies();
    }
  }, [searchMovie]);

  return (
    <>
      <MovieSearch onSubmit={handleSearch} />
      {foundMovies.length !== 0 && (
        <MovieSearchedList foundMovies={foundMovies} />
      )}
    </>
  );
};
export default MoviesPage;
