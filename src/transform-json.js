/** Transform the YAML-to-JSON output into a more convenient data structure */
function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false; 
  }
 
  return true;
}

const escapeUrl = (url) => url.replace(/<\/script>/g, "<\\/script>");

const transformNote = (note) => {
  if (typeof note === "string") {
    // text note formatted as URL
    if (isValidUrl(note)) {
      return {
        title: note,
        url: escapeUrl(note),     
      };
    };
    // text note
    return {
      title: note,
    };
  }
  // link note
  const linkName = Object.keys(note)[0];
  return {
    title: linkName,
    url: escapeUrl(note[linkName]),
  };
};

const transformLink = (link) => {
  if (typeof link === "string") {
    // note bookmark
    return {
      title: link,
    };
  }
  const linkName = Object.keys(link)[0];

  const result = {
    title: Object.keys(link)[0],
    url: escapeUrl(
      typeof link[linkName] === "string" ? link[linkName] : link[linkName][0]
    ),
  };

  if (typeof link[linkName] === "string") {
    return result; // simple link without notes
  }

  const notes = link[linkName].slice(1);

  if (notes.length === 0) return result;
  return {
    ...result,
    notes: notes.map((note) => transformNote(note)),
  };
};

const transformBucket = (bucket) => {
  const bucketName = Object.keys(bucket)[0];
  return {
    title: bucketName,
    links: bucket[bucketName].map((link) => transformLink(link)),
  };
};

module.exports = (json) =>
  Object.keys(json).map((collection) => ({
    title: collection,
    buckets: json[collection].map((bucket) => transformBucket(bucket)),
  }));
