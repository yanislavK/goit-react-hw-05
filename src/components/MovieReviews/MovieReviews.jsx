import { fetchMovieReviews } from "../../../api/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "../MovieReviews/MovieReviews.module.css";

const MovieReviews = () => {
  const [movieReview, setMovieReview] = useState(null);

  const params = useParams();
  const movieId = params.movieId;

  async function getMovieReviews() {
    try {
      const data = await fetchMovieReviews(movieId);

      setMovieReview(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }

  useEffect(() => {
    getMovieReviews();
  }, [movieId]);

  if (!movieReview) {
    return <div>Loading</div>;
  }

  return (
    <div className={css.reviewContainer}>
      {movieReview.length > 0 ? (
        movieReview.map((review) => (
          <li className={css.reviewItem} key={review.id}>
            <p className={css.reviewAuthor}>Author: {review.author}</p>
            <span className={css.reviewContent}>{review.content}</span>
          </li>
        ))
      ) : (
        <p>No reviews found</p>
      )}
    </div>
  );
};

export default MovieReviews;
