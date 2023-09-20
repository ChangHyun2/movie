import Image from "next/image";
import Link from "next/link";
import CityMovieListSection from "./movies/CityMovieListSection";

import CountryMovieListSection from "./movies/CountryMovieSection";
import KeywordMovieListSection from "./movies/KeywordMovieListSection";
import Header from "./components/Header";

import {
  cities,
  citiesMovieSummaries,
  countries,
  countriesMoviesSummaries,
} from "@/data/ui";

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
      </main>
      <footer>
        <ul className="grid grid-cols-4">
          {[
            {
              icon: "🏠",
              label: "홈",
              path: "/movies",
            },
            {
              icon: "🏠",
              label: "테마보기",
              path: "/keywords",
            },
            {
              icon: "🏠",
              label: "북마크",
              path: "/bookmark",
            },
            {
              icon: "🏠",
              label: "마이페이지",
              path: "/me",
            },
          ].map(({ icon, label, path }) => (
            <li key={path}>
              <Link href={path}>
                <div>{icon}</div>
                <div>{label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
