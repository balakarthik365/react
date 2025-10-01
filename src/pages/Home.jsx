import MovieCard from "../components/movieCard";

const Home = ({ movies = [] }) => {
  // console.log("movies:", movies);
  return movies.map((movie) => (
    <MovieCard
      key={movie.id}
      img={movie.img}
      alt={movie.title}
      slug={movie.slug}
    />
  ));
};
export default Home;
