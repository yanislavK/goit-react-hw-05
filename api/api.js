import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjBiZDBjOTYzNTUxOTRjMjQ3ZTk3MDE3NmVmY2JlYyIsInN1YiI6IjY1ZTcyZGJiMDk3YzQ5MDE2ZDY2MmRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eh_UhAim8lkuLrWNvOIC62rheAIi-BTOakmmlY74Of0",
  },
};

export async function fetchTrendingMovies() {
  const response = await axios.get("/3/trending/movie/day", options);
  return response.data.results;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(`/3/movie/${movieId}`, options);
  return response.data;
}
