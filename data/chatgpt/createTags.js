const { writeFileSync, readdir } = require("fs");

const tags = require("../tags.json");
const OpenAI = require("openai");
const path = require("path");
const crypto = require("crypto");

const engTags = tags.map((tag, idx) => {
  const { eng } = tag;

  return eng;
});

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

readdir(path.join(__dirname, "./citiesmovies"), (err, files) => {
  const citiesMovies = [];
  files.forEach((file) => {
    const cityMovies = require(path.join(__dirname, "./citiesmovies/" + file));

    citiesMovies.push({
      fileName: file,
      cityMovies,
    });
  });

  const seoulCityMovies = citiesMovies.find(
    (cityMovie) => cityMovie.cityMovies.name === "Vienna"
  );

  const test = [seoulCityMovies];

  (async () => {
    while (test.length) {
      const task = test.shift();
      const {
        cityMovies: { name: cityName, movies },
        fileName,
      } = task;

      const data = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
              classify """movies""" based on """classifiers""".

              These are """classifiers"""
              ${engTags.join(",")}

              classifiers are based on below criteria 
              - atmosphere 
              - plot
              - emotion

              These are """movies""" which are separated with comma, and each movie is formatted like {movie title}-{released year}.
              ${movies.map((m) => `${m.title}-${m.year}`).join(",")}
              
              Don't give me other tags which are not listed in """classifiers""".

              Your answer should be format like {movie index}-{classifiers}
              If a movie doesn't have any matching """classifiers""", please leave it empty.
              
              for example
              0-summer, touching, immersive
              1-korean loved
              2-
              3-winter, touching, tense, film festival award
              `,
          },
        ],
        model: "gpt-4",
      });

      const {
        choices: [
          {
            message: { content },
          },
        ],
      } = data;
      console.log(content);

      console.log({ content, cityName, movies, fileName });
      const movieTags = content.split("\n").map((tag, i) => {
        const cut = tag.indexOf("-");

        const tags = tag
          .slice(cut + 1)
          .split(",")
          .map((t) => t.trim());

        return tags;
      });

      writeFileSync(
        "./collected/" + fileName,
        JSON.stringify(
          movies.map((m, idx) => ({
            id: crypto.randomUUID(),
            movieId: m.id,
            tags: movieTags[idx],
          }))
        )
      );
    }
  })();
});

/*

              The "tags" are selected by me based on the following criteria.
              - historical background
              - atmosphere
              - plot
              - movie feature
              - emotion

*/
