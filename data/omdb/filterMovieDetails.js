const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const movieDetails = JSON.parse(
  readFileSync(path.join(__dirname, "./movieDetails.json"))
);

const filtered = {};

Object.entries(movieDetails).forEach(([movieId, movieDetail]) => {
  if (movieDetail.Response === "False") return;
  if (movieDetail.Poster === undefined || movieDetail.Poster === "N/A") return;

  filtered[movieId] = movieDetail;
});

writeFileSync(
  path.join(__dirname, "./movieDetails.json"),
  JSON.stringify(filtered)
);
