const { readFileSync, readdirSync, writeFileSync } = require("fs");
const crypto = require("crypto");
const path = require("path");

const files = readdirSync(path.join(__dirname, "./citiesmovies"));

const empties = ["Dubai", "Mugla", "Paris", "Rome", "Singapore"];

empties.forEach((city) => {
  const data = JSON.parse(
    readFileSync(path.join(__dirname, `./citiesmovies/${city}.json`))
  );

  const newData = {
    ...data,
    movies: data.movies.map((m) => ({ id: crypto.randomUUID(), ...m })),
  };

  writeFileSync(
    path.join(__dirname, `./citiesmovies/${city}.json`),
    JSON.stringify(newData)
  );
});
