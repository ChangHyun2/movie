const { readFileSync, readFile, writeFileSync } = require("fs");
const path = require("path");

const keywords = JSON.parse(
  readFileSync(path.join(__dirname, "../keywords.json"))
);

const movieKeywords = JSON.parse(
  readFileSync(path.join(__dirname, "../movieKeywords/movieKeywords.json"))
);

const tagIds = keywords.reduce((acc, { id, eng }) => {
  acc[eng] = id;
  return acc;
}, {});

let keywordsMovieIds;

try {
  keywordsMovieIds = JSON.parse(
    readFileSync(path.join(__dirname, "./keywordsMovieIds.json"))
  );
} catch (e) {
  keywordsMovieIds = {};
}

movieKeywords.forEach((movieKeyword) => {
  const { keywords, movieId } = movieKeyword;

  keywords.forEach((tag) => {
    const tagId = tagIds[tag];

    if (keywordsMovieIds[tagId]) {
      if (keywordsMovieIds[tagId].some((_movieId) => _movieId === movieId))
        return;
      console.log("initialize map");
      keywordsMovieIds[tagId].push(movieId);
    } else {
      console.log("initialize tag");
      keywordsMovieIds[tagId] = [movieId];
    }
  });
});

writeFileSync(
  path.join(__dirname, "./keywordsMovieIds.json"),
  JSON.stringify(keywordsMovieIds)
);
