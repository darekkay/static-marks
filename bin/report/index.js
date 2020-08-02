const fs = require("fs");
const glob = require("glob");

// const axios = require("axios");
const yaml = require("js-yaml");

const logger = require("../../src/logger");

const flatten = (array) => {
  return array.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
};

const extractLinks = (file) => {
  return flatten(
    Object.values(file).reduce(
      (result, buckets) => [
        ...result,
        ...buckets.map((bucket) => Object.values(bucket)),
      ],
      []
    )
  );
};

const report = ({ args }) => {
  const files = []
    .concat(...args.map((file) => glob.sync(file, { realpath: true })))
    .filter((file) => file.endsWith(".yml"));

  if (files.length === 0) {
    logger.error(`No *.yml files found. (Used glob pattern: ${args})`);
    process.exit(1);
  }

  const links = files
    .map((file) => {
      try {
        return yaml.safeLoad(fs.readFileSync(file, "utf8"));
      } catch (e) {
        return logger.exception(`Could not convert YAML file: ${file}\n `, e);
      }
    })
    .filter((bookmark) => bookmark !== undefined)
    .reduce((result, file) => [...result, ...extractLinks(file)], [])
    .map((link) => {
      const [key, value] = Object.entries(link)[0];
      return {
        title: key,
        url: typeof value === "string" ? value : Object.values(value)[0],
      };
    });

  logger.info("Number of bookmarks:", links.length);

  // TODO: broken link analysis
  // axios.get(links[0].url).then(response => response.status);
};

module.exports = report;
