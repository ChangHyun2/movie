import { MovieCardProps } from "./MovieCardMd";
import MovieCardSm from "./MovieCardSm";

type MovieSmScrollListProps = {
  movies: MovieCardProps[];
};

export default function MovieCardSmList({ movies }: MovieSmScrollListProps) {
  return (
    <ul className="flex overflow-auto snap-x snap-mandatory no-scrollbar">
      {movies.map((movie) => (
        <li
          key={movie.title}
          className="mr-3 snap-start scroll-ml-4 relative first:pl-4"
        >
          <MovieCardSm {...movie} />
        </li>
      ))}
    </ul>
  );
}
