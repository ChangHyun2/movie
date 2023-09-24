const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const jsonFile = {
  read: (name, dir = ".") =>
    JSON.parse(readFileSync(dir + "/" + name + ".json")),
  write: (name, json, dir = ".") =>
    writeFileSync(dir + "/" + name + ".json", JSON.stringify(json)),
};

module.exports = { jsonFile };
