import citiesMovieIds from "@/data/map/citiesMovieIds.json";

import citiesSummary from "@/data/chatgpt/citiesSummary.json";
import countriesCities from "@/data/countriescities.json";
import movieDetails from "@/data/omdb/movieDetails.json";
import keywordsJson from "@/data/keywords.json";
import keywordsMovieIds from "@/data/map/keywordsMovieIds.json";
import movieKeywordsJson from "@/data/movieKeywords/movieKeywords.json";

const movieIdToMovieSummary = (movieId) => {
  const movieDetail = movieDetails[movieId];
  if (!movieDetail) return null;
  const { Poster, Title, Ratings, Genre, BoxOffice } = movieDetail;
  const bo = BoxOffice.match(/[0-9]+/g);
  const boxOffice = bo ? +bo.join("") : 0;

  return {
    id: movieId,
    thumbnail: Poster,
    title: Title,
    rating: Ratings?.length
      ? ((Ratings[0].Value.split("/")[0] / 10) * 5).toFixed(1)
      : undefined,
    genre: Genre,
    boxOffice,
  };
};

export const cities = citiesSummary.map(({ id, kor }) => ({ id, kor }));
export const citiesMovieSummaries = cities.reduce((acc, city) => {
  const titleSet = new Set();

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

export const keywordEngsToKeywords = keywordsJson.reduce((acc, keyword) => {
  acc[keyword.eng] = keyword;
  return acc;
}, {});

export const movieIdsKeowrdEngs = movieKeywordsJson.reduce((acc, mk) => {
  if (mk.keywords.length) {
    acc[mk.movieId] = mk.keywords;
  }

  return acc;
}, {});

export const keywordsMovieSummaries = keywordsJson.reduce((acc, keyword) => {
  const titleSet = new Set();

  if (!keywordsMovieIds[keyword.id]) return acc;

  acc[keyword.id] = keywordsMovieIds[keyword.id]
    .map(movieIdToMovieSummary)
    .filter((movieSummary) => {
      if (!movieSummary) return false;
      if (titleSet.has(movieSummary.title)) return false;
      titleSet.add(movieSummary.title);
      return true;
    });

  return acc;
}, {});

export const keywords = keywordsJson
  .map(({ id, kor }) => {
    const keywordMovieSummary = keywordsMovieSummaries[id];
    if (!keywordMovieSummary) return null;
    return { id, kor };
  })
  .filter(Boolean);

export const keywordsKor = keywordsJson.reduce((acc, k) => {
  acc[k.eng] = k.kor;
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
