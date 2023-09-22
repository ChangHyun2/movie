const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const jsonFile = {
  read: (name, dir = ".") =>
    JSON.parse(readFileSync(path.join(__dirname, dir + "/" + name + ".json"))),
  write: (name, json, dir = ".") =>
    writeFileSync(
      path.join(__dirname, dir + "/" + name + ".json"),
      JSON.stringify(json)
    ),
};

module.exports = { jsonFile };
