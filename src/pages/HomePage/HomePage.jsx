import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../../api/api.js";
import TrendingMoviesList from "../../components/TrendingMoviesList/TrendingMoviesList.jsx";

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

  return <TrendingMoviesList trendingMovies={trendingMovies} />;
};
export default HomePage;
