import css from "../MovieSearch/MovieSearch.module.css";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieSearch = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams("");

  const title = searchParams.get("title") || "";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const search = title.trim();
    if (!search) {
      toast("Enter movie name");
      return;
    }
    onSubmit(search);
    setSearchParams({ title: "" });
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      handleSubmit(evt);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          onChange={(e) => setSearchParams({ title: e.target.value })}
          onKeyPress={handleKeyPress}
          type="text"
          autoComplete="off"
          value={title}
          autoFocus
          name="search"
          placeholder="Lord of the Rings..."
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
    </>
  );
};

export default MovieSearch;
