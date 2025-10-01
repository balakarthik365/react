import { useParams } from "react-router-dom";
import { useState } from "react";
import movies from "../JS/movies";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import MovieCard from "../components/movieCard";
const Details = () => {
  let { slug } = useParams();
  const [show, setShow] = useState(false);
  let movie = movies.find((movie) => {
    return movie.slug == slug;
  });
  let suggestion = movies.filter((similarSearches) => {
    return (
      similarSearches.genre === movie.genre &&
      similarSearches.imdb_rating >= 7.5
    );
  });
  return (
    <>
      <div
        className="relative w-full mt-3 h-[80vh] overflow-hidden"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <ReactPlayer
          src={movie.youtube_trailer}
          width="100vw"
          height="80vh"
          playing={false}
          loop={true}
          muted={true}
          controls={false}
        />
        {show && (
          <>
            <div className="absolute top-60 left-30 w-1/4">
              <button className="bg-orange-500 text-xs text-white font-bold px-2 py-1 rounded-sm">
                IMDB Rating: {movie.imdb_rating}
              </button>
              <h1 className="text-white font-bold text-5xl mt-2">
                {movie.title}
              </h1>
              <h1 className="text-white text-sm mt-2">{movie.description}</h1>
              <div className="mt-5">
                <Link
                  to="/"
                  className="border border-neutral-300 px-4 py-2 rounded-lg font-semibold text-white hover:text-black hover:bg-white hover:cursor-pointer"
                >
                  Go Back
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-3 bg-black">
        <h1 className="my-5 font-bold text-2xl text-white">
          Based on your Interest...
        </h1>
        <div className="flex gap-3 items-center w-[90vw] mx-auto ">
          {suggestion.map((suggested) => (
            <MovieCard
              img={suggested.img}
              alt={suggested.title}
              slug={suggested.slug}
              className="h-60 w-45 object-cover rounded-lg text-white"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
