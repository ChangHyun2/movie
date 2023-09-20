import { MovieCardProps } from "./MovieCardMd";
import MovieCardMd from "./MovieCardMd";

type MovieMdScrollListProps = {
  movies: MovieCardProps[];
};

export default function MovieCardMdList({ movies }: MovieMdScrollListProps) {
  return (
    <ul className="grid gap-4 grid-cols-2 mx-4">
      {movies.map((movie) => (
        <li key={movie.title}>
          <MovieCardMd {...movie} />
        </li>
      ))}
    </ul>
  );
}
