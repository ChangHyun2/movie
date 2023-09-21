const { writeFileSync, readdir, readdirSync, readFileSync } = require("fs");
const countriescities = require("../countriescities.json");

const OpenAI = require("openai");
const path = require("path");

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

const createCityPromise = async (city) => {
  // const data = await openai.chat.completions.create({
  //   messages: [
  //     {
  //       role: "user",
  //       content: `Recommend 30 movies filmed in ${city.name} city which are released after 2010\nresponse format : title-released,title-released,...`,
  //     },
  //   ],
  //   model: "gpt-4",
  // });

  // const {
  //   choices: [
  //     {
  //       message: { content },
  //     },
  //   ],
  // } = data;

  // const movies = content
  //   .split("\n")
  //   .slice(2)
  //   .map((mv) => {
  //     const tokens = mv.split(" ");
  //     const title = tokens.slice(1, tokens.length - 1).join(" ");
  //     const year = +tokens[tokens.length - 1].slice(1, -1);
  //     return { title, year };
  //   });

  const {
    choices: [{ message }],
  } = JSON.parse(readFileSync(`./cities/${city.name}-raw.json`));

  const { content } = message;

  const arrs = content.split(/[,\n]/);
  const movies = arrs.map((str) => {
    const title = str.match(/[a-zA-Z\s&]+/g);
    const year = str.match(/[0-9]+/g);

    if (!title || !year) return null;

    const _title = title.join("").trim();
    const _year = year.slice(-1);

    return { title: _title, year: +_year[0] };
  });

  writeFileSync(
    `./cities/${city.name}.json`,
    JSON.stringify({ ...city, movies })
  );

  writeFileSync(`./cities/${city.name}-raw.json`, JSON.stringify(data));

  return movies;
};

const empties = ["Dubai", "Mugla", "Paris", "Rome", "Singapore"];

// empties.forEach((name) => {
//   createCityPromise(name);
// });

const set = new Set(empties);

countriescities.forEach((country) => {
  country.cities.forEach((city) => {
    if (set.has(city.name)) {
      console.log(city.name);
      createCityPromise(city);
    }
  });
});
