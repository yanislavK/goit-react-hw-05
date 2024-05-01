import css from "../MovieSearch/MovieSearch.module.css";

const MovieSearch = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value.trim();
    if (!search) {
      console.log("IDI NAHOOY");
    }
    onSubmit(search);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.input}>
      <input type="text" autoComplete="off" autoFocus name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
