/** Render bookmarks into a template */
module.exports = ({ template, bookmarks, config = {} }) => {
  const injected = {
    bookmarks,
    title: config.title
  };

  return template.replace(
    'var injected="%INJECTED%"',
    `window.staticmarks=${JSON.stringify(injected)};`
  );
};
