const tags = require("./Seoul.json");
const movies = require("../data/chatgpt/citiesmovies/Seoul.json");

movies.movies
  .map((m) => {
    const tag = tags.find((t) => t.movieId === m.id);

    return {
      title: m.title,
      tag: tag.tags,
    };
  })
  .forEach(({ title, tag }, idx) => {
    console.log(`${idx}. ${title}`);
    console.log(`${tag.join(",")}`);
  });
