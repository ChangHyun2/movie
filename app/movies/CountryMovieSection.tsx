"use client";

import { useState } from "react";
import CountryList, { CountryListProps } from "../components/CountryList";
import Link from "next/link";
import MovieCardSmList from "../components/MovieCardSmList";
import { MovieCardProps } from "../components/MovieCardMd";

type CountryMovieListSectionProps = {
  countries: CountryListProps["countries"];
  countriesMovies: {
    [country in string]: MovieCardProps[];
  };
};

export default function CountryMovieListSection({
  countries,
  countriesMovies,
}: CountryMovieListSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    countries[0].id
  );

  const movies = countriesMovies[selectedCountry];

  return (
    <section>
      <div className="mb-3 mx-4">
        <Link href={`/movies/countries/${selectedCountry}`} className="semi18">
          나라 둘러보기
        </Link>
      </div>
      <div className="mb-2">
        <CountryList
          countries={countries}
          selected={selectedCountry}
          onChange={(selected) => setSelectedCountry(selected)}
        />
      </div>
      <MovieCardSmList movies={movies} />
    </section>
  );
}
