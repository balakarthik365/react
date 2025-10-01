import { Link } from "react-router-dom";

const MovieCard = ({ img, alt, slug }) => {
  return (
    <>
      <Link to={`/details/${slug}`}>
        <img
          src={img}
          alt={alt}
          className="h-60 w-45 object-cover rounded-lg text-white"
        />
      </Link>
    </>
  );
};

export default MovieCard;
