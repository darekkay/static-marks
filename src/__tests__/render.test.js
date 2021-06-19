const render = require("../render.js");

describe("Render", () => {
  test("replaces bookmarks placeholder with content", () => {
    const template = `foo-var injected="%INJECTED%"-bar`;
    expect(render({ template, bookmarks: { a: 1 } })).toContain(
      '"bookmarks":{"a":1}'
    );
  });

  test("replaces title placeholder with content", () => {
    const template = `foo-var injected="%INJECTED%"-bar`;
    expect(render({ template, config: { title: "moo" } })).toContain(
      '"title":"moo"'
    );
  });

  test("returns the template if the placeholder is not present", () => {
    const template = `foo-bar`;
    expect(render({ template, bookmarks: { a: 1 } })).toEqual(template);
  });
});
