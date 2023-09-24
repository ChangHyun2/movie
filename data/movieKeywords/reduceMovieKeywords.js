const { readdirSync, readFileSync, writeFileSync } = require("fs");
const path = require("path");

const files = readdirSync(path.join(__dirname, "../movieKeywords"));

const keywords = {};

const keywordMovies = files.reduce((acc, file) => {
  const [, ext] = file.split(".");
  if (ext === "js") return acc;
  const data = JSON.parse(readFileSync(path.join(__dirname, file)));

  const { keywords } = data;
  data.forEach((d) => {
    d.keywords.forEach((tag) => {
      keywords[tag] = tag;
    });
  });

  return acc.concat(data.map((d) => d));
}, []);

console.log(keywordMovies);

writeFileSync(
  path.join(__dirname, "./movieKeywords.json"),
  JSON.stringify(keywordMovies)
);
