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
  const [sortOption, setSortOption] = useState("boxOffice");

  const sortedMovies = movies.sort((a: any, b: any) => {
    if (sortOption === "boxOffice") {
      return b.boxOffice - a.boxOffice;
    } else {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  });

  const handleChange = (e: any) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <Header navigation fixed>
        <div className="flex justify-end my-2">
          <select onChange={handleChange} value={sortOption}>
            <option value="boxOffice">인기순</option>
            <option value="abc">가나다순</option>
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
      <main className="pt-[164px]">
        <section>
          <div className="h-[calc()]">
            <MovieCardMdList movies={sortedMovies} />
          </div>
        </section>
      </main>
    </>
  );
}

56;
