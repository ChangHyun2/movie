"use client";

import { useState } from "react";
import CityList, { CityListProps } from "../../components/CityList";
import Link from "next/link";
import MovieCardSmList from "../../components/MovieCardSmList";
import { MovieCardProps } from "../../components/MovieCardMd";
import Image from "next/image";

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
        <Link
          href={`/movies/theme/cities/${selectedCity}`}
          className="semi18 flex items-center"
        >
          <span>도시 둘러보기</span>
          <Image
            src="/tevi/icon-chevron-right-22-line.svg"
            alt="go to page"
            width={22}
            height={22}
          />
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
