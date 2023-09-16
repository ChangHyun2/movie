"use client";

import { useSearchParams } from "next/navigation";

import { Card, CardMedia, Grid } from "@mui/material";
import 중꺾마 from "../../data/keyword/중꺾마.json";
import 돈쭐내다 from "../../data/keyword/돈쭐내다.json";
import MovieCard from "../components/MovieCard";
import MoviesCarousel from "../components/MoviesCarousel";

const keywords: {
  [key in string]: Keyword;
} = {
  중꺾마,
  돈쭐내다,
};

export default function MoviesPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  if (!keyword) return null;

  const keywordData = keywords[keyword];

  const { name, thumbnail, description, movies } = keywordData;

  return (
    <main>
      <div className="flex justify-center">
        <div style={{ width: "345px" }}>
          <MoviesCarousel movies={movies} />
        </div>
      </div>
    </main>
  );
}

export type Keyword = {
  name: string;
  thumbnail: string;
  description: string;
  movies: Movie[];
};

export type Rating = {
  Source: string;
  Value: string;
};

/*
{ "Source": "Internet Movie Database", "Value": "7.2/10" },
{ "Source": "Rotten Tomatoes", "Value": "51%" },
{ "Source": "Metacritic", "Value": "59/100" }
*/

export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};
