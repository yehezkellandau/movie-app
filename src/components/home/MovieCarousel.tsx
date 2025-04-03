import { TypeMovie } from "@/types/api/movie";
import MovieCard from "../ui/MovieCard";

type MovieListProps = {
  title: string;
  movieData: TypeMovie[];
};

const MovieCarousel = ({title, movieData }: MovieListProps) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="overflow-x-auto py-4">
        <div className="flex space-x-4">
          {movieData.map((movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              posterUrl={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
