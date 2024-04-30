import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
