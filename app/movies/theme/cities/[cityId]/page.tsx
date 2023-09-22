"use client";

import { cities, citiesMovieSummaries } from "@/data/ui";
import CityList from "@/app/components/CityList";
import { useState } from "react";
import Header from "@/app/components/Header";

import MovieCardMdList from "@/app/components/MovieCardMdList";

export default function CitiesMoviesPage({
  params,
}: {
  params: { cityId: string };
}) {
  const [selectedCity, setSelectedCity] = useState<string>(params.cityId);

  const movies = (citiesMovieSummaries as any)[selectedCity];
  const cityId = params.cityId || cities[0].id;

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
          <CityList
            cities={cities}
            selected={selectedCity}
            onChange={(selected) => setSelectedCity(selected)}
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
