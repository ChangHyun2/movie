import Image from "next/image";
import Link from "next/link";
import CityMovieListSection from "./movies/theme/CityMovieListSection";

import CountryMovieListSection from "./movies/theme/CountryMovieSection";
import KeywordMovieListSection from "./components/KeywordMovieListSection";
import Header from "./components/Header";

import {
  cities,
  citiesMovieSummaries,
  countries,
  countriesMoviesSummaries,
} from "@/data/ui";
import KeywordListSection from "./movies/theme/KeywordsListSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <CityMovieListSection
          citiesMovies={citiesMovieSummaries}
          cities={cities}
        />
        <div className="mb-6"></div>
        <CountryMovieListSection
          countriesMovies={countriesMoviesSummaries}
          countries={countries}
        />
        <div className="mb-6"></div>
        <KeywordMovieListSection />
        <div className="mb-6"></div>
        <KeywordListSection />
      </main>
    </>
  );
}
