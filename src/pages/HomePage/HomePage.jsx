import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../../api/api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import css from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  async function fetchMovies() {
    try {
      const data = await fetchTrendingMovies();
      setTrendingMovies(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending Movies</h1>
      <MovieList foundMovies={trendingMovies} />
    </>
  );
};

export default HomePage;
