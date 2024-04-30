import css from "../MovieSearch/MovieSearch.module.css";

const MovieSearch = () => {
  return (
    <>
      <form className={css.input}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default MovieSearch;
