const { writeFileSync } = require("fs");
const countriescities = require("../countriescities.json");

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
});

const createCityPromise = async (city) => {
  const data = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Recommend 30 movies set in ${city.name} city which are released after 2010\nresponse format : title-released,title-released,...`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const {
    choices: [
      {
        message: { content },
      },
    ],
  } = data;

  const movies = content
    .split("\n")
    .slice(2)
    .map((mv) => {
      const tokens = mv.split(" ");
      const title = tokens.slice(1, tokens.length - 1).join(" ");
      const year = +tokens[tokens.length - 1].slice(1, -1);
      return { title, year };
    });

  writeFileSync(
    `./cities/${city.name}.json`,
    JSON.stringify({ ...city, movies })
  );

  return movies;
};

const cityPromises = [];

countriescities.forEach((country) => {
  country.cities.forEach((city) => {
    createCityPromise(city);
  });
});

createCityPromise(countriescities[0].cities[0]);
