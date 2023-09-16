"use client";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { Movie } from "../movies/page";

export default function MoviesCarousel({ movies }: { movies: Movie[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <MovieCard key={movie.Title} movie={movie} />
      ))}
    </Slider>
  );
}
