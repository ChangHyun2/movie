import citiesMovieIds from "@/data/map/citiesMovieIds.json";

import citiesSummary from "@/data/chatgpt/citiesSummary.json";
import countriesCities from "@/data/countriescities.json";
import { movieDetails } from "./movieDetails";

const movieIdToMovieSummary = (movieId) => {
  const movieDetail = movieDetails[movieId];
  if (!movieDetail) return null;

  const { id, Poster, Title, Ratings, Genre } = movieDetail;

  if (Poster === "N/A" || Poster === undefined) return null;

  return {
    id: movieId,
    thumbnail: Poster,
    title: Title,
    rating: Ratings?.length
      ? ((Ratings[0].Value.split("/")[0] / 10) * 5).toFixed(1)
      : undefined,
    genre: Genre,
  };
};

export const cities = citiesSummary.map(({ id, kor }) => ({ id, kor }));
export const citiesMovieSummaries = cities.reduce((acc, city) => {
  const titleSet = new Set();

  // console.log(citiesMovieIds[city.id]);
  acc[city.id] = citiesMovieIds[city.id]
    .map(movieIdToMovieSummary)
    .filter((movieSummary) => {
      if (!movieSummary) return false;
      if (titleSet.has(movieSummary.title)) return false;
      titleSet.add(movieSummary.title);
      return true;
    });

  return acc;
}, {});

export const countries = countriesCities.map((c) => ({
  id: c.id,
  kor: c.translations.kr,
  emoji: c.emoji,
}));

export const countriesMoviesSummaries = countriesCities.reduce(
  (acc, countryCities) => {
    const titleSet = new Set();

    acc[countryCities.id] = countryCities.cities
      .reduce(
        (acc, city) =>
          acc.concat(citiesMovieIds[city.id].map(movieIdToMovieSummary)),
        []
      )
      .filter((movieSummary) => {
        if (!movieSummary) return false;
        if (titleSet.has(movieSummary.title)) return false;
        titleSet.add(movieSummary.title);
        return true;
      });
    return acc;
  },
  {}
);
