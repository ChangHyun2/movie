const { readdir, writeFileSync } = require("fs");
const path = require("path");
const qs = require("qs");

const movieDetails = require("./movieDetails.json");

readdir(path.join(__dirname, "../chatgpt/citiesmovies"), (err, files) => {
  const fileTasks = [...files].slice(2);

  (async () => {
    while (fileTasks.length) {
      const file = fileTasks.shift();

      const cityMovies = require(path.join(
        __dirname,
        "../chatgpt/citiesmovies/" + file
      ));

      const movies = cityMovies.movies;
      console.log(movies.length);

      const promises = movies.map(async (m, idx) => {
        await new Promise((res) => setTimeout(() => res(), idx * 500));
        const data = await getMovie({ t: m.title, y: m.year });

        return data;
      });

      const data = await Promise.all(promises);

      data.forEach((m, idx) => {
        const movie = movies[idx];
        movieDetails[movie.id] = m;
      });

      writeFileSync(
        "./prevTask.json",
        JSON.stringify({
          taskType: "createMovieDetail.js",
          file,
        })
      );

      writeFileSync("./movieDetails.json", JSON.stringify(movieDetails));
    }
  })();
});

const getMovie = async (params) => {
  const _params = {
    apikey: "c87cae29",
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

  return null;
};
