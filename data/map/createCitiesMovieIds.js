const { readdirSync, readFileSync, writeFileSync } = require("fs");
const path = require("path");

const files = readdirSync(path.join(__dirname, "../chatgpt/citiesmovies"));

const obj = {};
files.forEach((file) => {
  const cityMovies = JSON.parse(
    readFileSync(path.join(__dirname, "../chatgpt/citiesmovies/" + file))
  );

  const { id, movies } = cityMovies;

  const movieIds = movies.map((movie) => movie.id);

  obj[id] = movieIds;
});

writeFileSync("./citiesMovieIds.json", JSON.stringify(obj));
