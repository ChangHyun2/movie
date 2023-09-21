const { readdir, writeFileSync, readFileSync } = require("fs");
const fetch = require("node-fetch");
const path = require("path");
const qs = require("qs");

const failures = new Set();

readdir(path.join(__dirname, "../chatgpt/citiesmovies"), (err, files) => {
  const movieDetails = JSON.parse(
    readFileSync(path.join(__dirname, "./movieDetails.json"))
  );
  const fileTasks = files;
  const stack = [];

  fileTasks.forEach((file) => {
    const cityMovies = require(path.join(
      __dirname,
      "../chatgpt/citiesmovies/" + file
    ));

    stack.push(...cityMovies.movies);
  });

  (async () => {
    while (stack.length) {
      const movie = stack.shift();

      if (
        movieDetails[movie.id].Response === "False" ||
        movieDetails[movie.id] === null
      ) {
        // continue;

        console.log(movie.id);

        console.log(`collect ${movie.id}`);
        await new Promise((res) => setTimeout(() => res(), 300));
        const movieDetail = await getMovie({ t: movie.title, y: movie.year });
        if (movieDetail !== null) {
          movieDetails[movie.id] = movieDetail;
          console.log(`collect success`);
        } else {
          if (failures.has(movie.title)) {
            console.log(`failure again : ${movie.title}`);
          }

          console.log(`collect failure`);
          failures.add(movie.title);
          stack.push(movie);
        }

        writeFileSync(
          path.join(__dirname, "./movieDetails.json"),
          JSON.stringify(movieDetails)
        );
      }
    }
  })();
});

const getMovie = async (params) => {
  const _params = {
    apikey: "ff8a33e4",
    type: "movie",
    plot: "full",
    r: "json",
    ...params,
  };

  const res = await fetch(`http://www.omdbapi.com/?${qs.stringify(_params)}`);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  console.log(res.status);

  return null;
};
