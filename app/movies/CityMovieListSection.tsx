"use client";

import { useState } from "react";
import CityList, { CityListProps } from "../components/CityList";
import Link from "next/link";
import MovieCardSmList from "../components/MovieCardSmList";
import { MovieCardProps } from "../components/MovieCardMd";

type CityMovieListSectionProps = {
  cities: CityListProps["cities"];
  citiesMovies: {
    [city in string]: MovieCardProps[];
  };
};

export default function CityMovieListSection({
  cities,
  citiesMovies,
}: CityMovieListSectionProps) {
  const [selectedCity, setSelectedCity] = useState<string>(cities[0].id);

  const movies = citiesMovies[selectedCity];

  return (
    <section>
      <div className="mb-3 mx-4">
        <Link href={`/movies/cities/${selectedCity}`} className="semi18">
          도시 둘러보기
        </Link>
      </div>
      <div className="mb-2">
        <CityList
          cities={cities}
          selected={selectedCity}
          onChange={(selected) => setSelectedCity(selected)}
        />
      </div>
      <MovieCardSmList movies={movies} />
    </section>
  );
}
