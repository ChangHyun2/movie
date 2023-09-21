"use client";

import { useState } from "react";

import CityList, { CityListProps } from "@/app/components/CityList";
import { MovieCardProps } from "@/app/components/MovieCardMd";
import MovieCardMdList from "@/app/components/MovieCardMdList";

type CityMovieListSectionProps = {
  cities: CityListProps["cities"];
  citiesMovies: {
    [city in string]: MovieCardProps[];
  };
  initialSelectedCity: string;
};

export default function CityMovieListSection({
  cities,
  citiesMovies,
  initialSelectedCity,
}: CityMovieListSectionProps) {
  const [selectedCity, setSelectedCity] = useState<string>(initialSelectedCity);

  const movies = citiesMovies[selectedCity];

  return (
    <section>
      <div className="mb-2">
        <CityList
          cities={cities}
          selected={selectedCity}
          onChange={(selected) => setSelectedCity(selected)}
        />
      </div>
      <MovieCardMdList movies={movies} />
    </section>
  );
}
