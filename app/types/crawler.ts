export type Keyword = {
  id: string;
  kor: string;
  eng: string;
};

export type CityKeyword = {
  id: "e83bdcca-cf25-4da5-a8bf-49ef326b8838";
  movieId: "0f8d9060-8185-4a21-b314-f1ff98f7a1af";
  keywords: string[];
};

export type CityKeywords = CityKeyword[];

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieSummary = {
  id: string;
  title: string;
  year: number;
};

export type MovieDetail = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

export type CitySummary = {
  id: string;
  rank: number;
  name: string;
  country: string;
  tourists: number;
  kor: string;
};

export type CountryCities = {
  id: string;
  emoji: string;
  translations: {
    kr: string;
  };
  name: string;
  cities: CitySummary[];
};

export type CityMovies = {
  id: string;
  rank: number;
  name: string;
  country: string;
  tourists: number;
  movies: MovieSummary[];
};
