const path = require("path");
const { jsonFile } = require("../utils/file");
const { translate } = require("@vitalets/google-translate-api");

const localized = jsonFile.read("./app/locale/localizedMovieIds");

const movieDetails = jsonFile.read(
  "movieDetails",
  path.join(__dirname, "../../data/omdb")
);

const localizeMovieDetail = async (movieId, movieDetail) => {
  const { Title, Plot, Writer, Director, Actors, Genre, Rated } = movieDetail;

  if (movieDetail.Response === "False") {
    return null;
  }

  // console.log({ Title, Plot, genres, actors, writers, directors });

  const genres = genres.split(",");

  return;

  // ## check movie is localized
  // if (localized[movieId]) return;
  localized[movieId] = true;

  jsonFile.write("./app/locale/localizedMovieIds", localized);

  const SEPERATOR = "  ###  ";
  const engD = [Title, Plot, Writer, Actors, Director].join(SEPERATOR);

  const { text: korD } = await translate(engD, { from: "en", to: "ko" });

  const [titleKor, plotKor, writersKor, actorsKor, directorKor] =
    korD.split("###");

  const movieKor = {
    Title: titleKor.trim(),
    Plot: plotKor.trim(),
  };

  const moviesKor = jsonFile.read("moviesKor");
  if (moviesKor[movieId]) return;
  moviesKor[movieId] = movieKor;
  jsonFile.write("moviesKor", moviesKor);

  // console.log(moviesKor);
};

Object.entries(movieDetails).map(([movieId, movieDetail], idx) =>
  setTimeout(() => {
    localizeMovieDetail(movieId, movieDetail);
  }, idx * 2000)
);
