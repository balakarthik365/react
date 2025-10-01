import axios from "axios";
import { useEffect, useState } from "react";

const SearchMovies = () => {
  let [movie, setMovie] = useState(null);
  let [search, setSearch] = useState("");
  let [searchTerm, setSearchTerm] = useState("");
  let [errors, setErrors] = useState("");
  const searchMovieHandler = () => {
    setSearchTerm(search);
  };
  useEffect(() => {
    if (searchTerm !== "") {
      axios
        .get(`http://www.omdbapi.com/?apikey=b0e56216&t=${searchTerm}`)
        .then((res) => {
          //   console.log(movie);
          if (res.data.Response === "False") {
            setErrors(res.data.Error);
            setMovie(null); // clear movie if error
          } else {
            setMovie(res.data);
            setErrors(""); // clear error if success
          }
        })
        .catch((error) => {
          console.error("Network or Server Error:", error);
          setErrors("Something went wrong, please try again.");
          setMovie(null);
        });
    }
  }, [searchTerm]);

  return (
    <>
      <div className="mt-5 w-[450px] mx-auto p-2">
        <div className="flex items-center gap-4">
          <div className="p-1">
            <label htmlFor="search">Search Movies:</label>
            <input
              type="text"
              name=""
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter here"
              className="ms-2  border-b border-neutral-400 focus:outline-none"
            />
          </div>
          <button
            onClick={searchMovieHandler}
            className="rounded-lg text-white bg-blue-500 font-semibold px-2 py-1 hover:cursor-pointer hover:shadow-md hover:shadow-blue-600"
          >
            Search
          </button>
        </div>
      </div>
      <hr></hr>
      {movie && movie.Title ? (
        <div className="w-[700px] mt-3 mx-auto border border-neutral-400 p-2">
          <div className="flex items-center gap-4">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="h-60 w-auto object-fill rounded-lg border border-neutral-200"
            />
            <div className="p-2">
              <h1 className="text-3xl font-bold text-blue-950">
                {movie.Title}({movie.Year})
              </h1>
              <h1 className="my-2 text-sm font-bold text-blue-950">
                Director: <span className="font-normal">{movie.Director}</span>
              </h1>
              <h1 className="my-2 text-sm font-bold text-blue-950">
                Actors: <span className="font-normal">{movie.Actors}</span>
              </h1>
              <h1 className="my-2 text-sm font-bold text-blue-950">
                Languages: <span className="font-normal">{movie.Language}</span>
              </h1>
              <h1 className="my-2 text-sm font-bold text-blue-950">
                Awards: <span className="font-normal">{movie.Awards}</span>
              </h1>
            </div>
          </div>
        </div>
      ) : errors ? (
        <div className="w-1/2 mt-3 mx-auto text-center text-red-800 font-bold text-5xl">
          {errors}
        </div>
      ) : null}
    </>
  );
};

export default SearchMovies;
