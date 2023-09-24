const { readdirSync, readFileSync, writeFileSync } = require("fs");
const path = require("path");
const { jsonFile } = require("../../app/utils/file");

const movieDetails = jsonFile.read("./data/omdb/movieDetails");
const files = readdirSync(path.join(__dirname, "../chatgpt/citiesmovies"));

const obj = {};
files.forEach((file) => {
  const cityMovies = JSON.parse(
    readFileSync(path.join(__dirname, "../chatgpt/citiesmovies/" + file))
  );

  const { id, movies } = cityMovies;

  const movieIds = movies.map((movie) => movie.id);
  const filteredMovieIds = movieIds.filter((movieId) => {
    const movieDetail = movieDetails[movieId];

    if (
      movieDetail &&
      movieDetail.Response === "True" &&
      movieDetail.Poster &&
      movieDetail.Poster !== "N/A"
    ) {
      return true;
    }

    return false;
  });
  obj[id] = filteredMovieIds;
});

writeFileSync("./citiesMovieIds.json", JSON.stringify(obj));
