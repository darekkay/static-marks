const fs = require("fs");
const glob = require("glob");
const logger = require("@darekkay/logger");

const yaml = require("js-yaml");

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

const report = ({ args, options }) => {
  const files = args
    .flatMap((file) => glob.sync(file, { realpath: true }))
    .filter((file) => file.endsWith(".yml"));

  if (files.length === 0) {
    logger.error(`No *.yml files found. (Used glob pattern: ${args})`);
    process.exit(1);
  }

  const links = files
    .map((file) => {
      try {
        return yaml.load(fs.readFileSync(file, "utf8"));
      } catch (error) {
        return logger.error(
          `Could not convert YAML file: ${file}\n `,
          error.message || error
        );
      }
    })
    .filter((bookmark) => bookmark !== undefined)
    .reduce((result, file) => [...result, ...extractLinks(file)], [])
    .map((link) => {
      const [key, value] = Object.entries(link)[0];
      // first-level notes should not count as bookmarks
      if (typeof link === "string") {
        return null;
      }
      return {
        title: key,
        url: typeof value === "string" ? value : Object.values(value)[0],
      };
    })
    .filter(Boolean);

  logger.info(`Number of bookmarks: ${links.length}`);

  if (options.duplicates) {
    // List duplicate URLs
    const linkUrls = links.map((link) => link.url);
    if (new Set(linkUrls).size === linkUrls.length) {
      logger.info("No duplicate bookmark URLs");
      return;
    }
    logger.info("Duplicate bookmark URLs found:");
    const urlsWithCounts = {};
    linkUrls.forEach((url) => {
      urlsWithCounts[url] = (urlsWithCounts[url] || 0) + 1;
    });
    Object.entries(urlsWithCounts).forEach(([url, count]) => {
      if (count > 1) {
        logger.log(`  ${url} (${count})`);
      }
    });
  }

  // TODO: broken link analysis
  // axios.get(links[0].url).then(response => response.status);
};

module.exports = {
  run: report,
};
