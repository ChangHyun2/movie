const citiesMovieIds = require("../map/citiesMovieIds.json");
const movieDetails = require("../omdb/movieDetails.json");

Object.entries(citiesMovieIds).forEach(([cityId, movieIds]) => {
  const moviesCount = movieIds
    .map((movieId) => movieDetails[movieId])
    .filter(
      (movieDetail) => movieDetail && movieDetail.Response === "True"
    ).length;

  if (moviesCount === 0) {
    //filter

    console.log(cityId);
  }
});
