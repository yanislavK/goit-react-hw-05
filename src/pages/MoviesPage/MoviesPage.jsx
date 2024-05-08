import { useEffect, useState } from "react";
import { searchMovieByName } from "../../../api/api.js";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);

  const handleSearch = (search) => {
    setSearchMovie(search);
  };

  async function fetchSearchedMovies() {
    try {
      const data = await searchMovieByName(searchMovie);
      if (data.length === 0) {
        toast("🦄 Movie not found", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setFoundMovies(data);
      }
    } catch (error) {
      console.error("Error fetching searched movies:", error);
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
      {foundMovies.length !== 0 && <MovieList foundMovies={foundMovies} />}
    </>
  );
};
export default MoviesPage;
