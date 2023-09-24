"use client";

import { cities, citiesMovieSummaries } from "@/data/ui";
import CityList from "@/app/components/CityList";
import { useState } from "react";
import Header from "@/app/components/Header";

import MovieCardMdList from "@/app/components/MovieCardMdList";
import { MovieSummary } from "@/app/types/crawler";

export default function CitiesMoviesPage({
  params,
}: {
  params: { cityId: string };
}) {
  const [selectedCity, setSelectedCity] = useState<string>(params.cityId);

  const movies = (citiesMovieSummaries as any)[selectedCity];
  const cityId = params.cityId || cities[0].id;
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
        <div className="flex justify-end my-2 mx-4">
          <select onChange={handleChange} value={sortOption}>
            <option value="boxOffice">인기순</option>
            <option value="abc">가나다순</option>
          </select>
        </div>
        <div className="mb-2">
          <CityList
            cities={cities}
            selected={selectedCity}
            onChange={(selected) => setSelectedCity(selected)}
          />
        </div>
      </Header>
      <main className="pt-[164px]">
        <section>
          <MovieCardMdList movies={sortedMovies} />
        </section>
      </main>
    </>
  );
}

56;
