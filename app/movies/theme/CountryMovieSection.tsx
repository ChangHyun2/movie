"use client";

import { useState } from "react";
import CountryList, { CountryListProps } from "../../components/CountryList";
import Link from "next/link";
import MovieCardSmList from "../../components/MovieCardSmList";
import { MovieCardProps } from "../../components/MovieCardMd";
import Image from "next/image";

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
        <Link
          href={`/movies/theme/countries/${selectedCountry}`}
          className="semi18 flex items-center"
        >
          <span>나라 둘러보기</span>
          <Image
            src="/tevi/icon-chevron-right-22-line.svg"
            alt="go to page"
            width={22}
            height={22}
          />
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
