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

  const collected = [
    "Seoul",
    "Vienna",
    "Abu Dhabi",
    "Agra",
    "Amman",
    "Amsterdam",
    "Antalya",
    "Auckland",
    "Baku",
    "Bangkok",
    "Barcelona",
    "Beijing",
    "Berlin",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Buenos Aires",
    "Burgas",
  ];

  const test = citiesMovies.filter(({ cityMovies }) => cityMovies.rank < 11);
  console.log(test);
  return;

  (async () => {
    while (test.length) {
      const task = test.shift();
      const {
        cityMovies: { name: cityName, movies },
        fileName,
      } = task;

      if (collected.some((c) => c === cityName)) continue;

      const movieTags = [];

      const promise = new Promise((res) => {
        movies.forEach((m, idx) => {
          setTimeout(() => {
            openai.chat.completions
              .create({
                messages: [
                  {
                    role: "user",
                    content: `
                  i want to label some classifiers to a movie.
  
                  movie
                  title : ${m.title}
                  released year : ${m.year}
  
                  give me related """classifiers""" with the movie.
    
                  These are """classifiers"""
                  ${engTags.join(",")}
    
                  classifiers are based on atmosphere, plot, emotion.
                  Don't give me other tags which are not listed in """classifiers""". 
                  If a movie doesn't have any matching """classifiers""", please leave it empty. 
  
  
                  output should only contain classifiers with comma seperator.
                  `,
                  },
                ],
                model: "gpt-4",
              })
              .then((data) => {
                const {
                  choices: [
                    {
                      message: { content },
                    },
                  ],
                } = data;

                const possibleTags = content.split(",").map((s) => s.trim());
                console.log(content);

                const tags = possibleTags.filter((t) =>
                  engTags.some((tag) => tag === t)
                );

                movieTags.push({
                  id: crypto.randomUUID(),
                  movieId: m.id,
                  tags,
                });

                console.log(movieTags);

                // last
                if (idx === movies.length - 1) {
                  writeFileSync(
                    "./top10/" + fileName,
                    JSON.stringify(movieTags)
                  );
                  res(fileName + "done");
                }

                // const movieTags = content.split("\n").map((tag, i) => {
                //   const cut = tag.indexOf("-");

                //   const tags = tag
                //     .slice(cut + 1)
                //     .split(",")
                //     .map((t) => t.trim());

                //   return tags;
                // });
              });
          }, 3000 * idx);
        });
      });

      await promise;
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
