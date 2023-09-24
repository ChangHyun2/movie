const keywords = require("./Seoul.json");
const movies = require("../data/chatgpt/citiesmovies/Seoul.json");

movies.movies
  .map((m) => {
    const tag = keywords.find((t) => t.movieId === m.id);

    return {
      title: m.title,
      tag: tag.keywords,
    };
  })
  .forEach(({ title, tag }, idx) => {
    console.log(`${idx}. ${title}`);
    console.log(`${tag.join(",")}`);
  });
