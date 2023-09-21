import { cities, citiesMovieSummaries } from "@/data/ui";
import CityMovieListSection from "./CityMovieListSection";

export default function CitiesMoviesPage({
  params,
}: {
  params: { cityId: string };
}) {
  const cityId = params.cityId || cities[0].id;
  return (
    <>
      <main>
        <div className="flex justify-end">
          <select>
            <option>인기순</option>
            <option>가나다순</option>
          </select>
        </div>
        <CityMovieListSection
          cities={cities}
          citiesMovies={citiesMovieSummaries}
          initialSelectedCity={cityId}
        />
      </main>
    </>
  );
}
