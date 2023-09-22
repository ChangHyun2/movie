"use client";

import { countries, countriesMoviesSummaries } from "@/data/ui";
import { useState } from "react";
import Header from "@/app/components/Header";

import MovieCardMdList from "@/app/components/MovieCardMdList";
import CountryList from "@/app/components/CountryList";

export default function CountriesMoviesPage({
  params,
}: {
  params: { countryId: string };
}) {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    params.countryId
  );

  console.log(countriesMoviesSummaries, selectedCountry);
  const movies = (countriesMoviesSummaries as any)[selectedCountry];
  const countryId = params.countryId || countries[0].id;

  return (
    <>
      <Header navigation fixed>
        <div className="flex justify-end">
          <select>
            <option>인기순</option>
            <option>가나다순</option>
          </select>
        </div>
        <div className="mb-2">
          <CountryList
            countries={countries}
            selected={selectedCountry}
            onChange={(selected) => setSelectedCountry(selected)}
          />
        </div>
      </Header>
      <main className="pt-[148px]">
        <section>
          <div className="h-[calc()]">
            <MovieCardMdList movies={movies} />
          </div>
        </section>
      </main>
    </>
  );
}

56;
