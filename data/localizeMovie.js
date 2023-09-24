const path = require("path");
const { jsonFile } = require("../app/utils/file");
const { translate } = require("@vitalets/google-translate-api");
const { default: OpenAI } = require("openai");
const { readFileSync, writeFileSync } = require("fs");

const localized = jsonFile.read("./app/locale/localizedMovieIds");

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

const movieDetails = jsonFile.read(
  "movieDetails",
  path.join(__dirname, "./omdb")
);

const localizeMovieDetail = async (movieId, movieDetail) => {
  const { Title, Plot, Writer, Director, Actors, Genre, Rated } = movieDetail;

  if (movieDetail.Response === "False") {
    return null;
  }
  if (movieDetail.Plot === "N/A") return null;

  const moviePlots = JSON.parse(
    readFileSync(path.join(__dirname, "./moviePlots.json"))
  );

  if (moviePlots[movieId]) return;

  const data = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Translate to korean\n${Plot}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const {
    choices: [
      {
        message: { content },
      },
    ],
  } = data;

  moviePlots[movieId] = content;
  console.log({ content });
  writeFileSync(
    path.join(__dirname, "./moviePlots.json"),
    JSON.stringify(moviePlots)
  );

  return;
};

const stack = [];
Object.entries(movieDetails).forEach((entry) => {
  stack.push(entry);
});

(async () => {
  while (stack.length) {
    const entry = stack.pop();
    await localizeMovieDetail(...entry);
  }
})();
