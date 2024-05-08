import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <p style={{ fontWeight: "bold" }}>Page not found</p>
      <Link to="/">Try to visit our Trending Movies page </Link>
    </div>
  );
};

export default NotFoundPage;
