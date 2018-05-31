const { expect } = require("chai");

const render = require("../src/render.js");

describe("Render", () => {
  it("replaces bookmarks placeholder with content", () => {
    const template = `foo-"%INJECTED%"-bar`;
    expect(render({ template, bookmarks: { a: 1 } })).to.contain(
      '"bookmarks":{"a":1}'
    );
  });

  it("replaces title placeholder with content", () => {
    const template = `foo-"%INJECTED%"-bar`;
    expect(render({ template, config: { title: "moo" } })).to.contain(
      '"title":"moo"'
    );
  });

  it("returns the template if the placeholder is not present", () => {
    const template = `foo-bar`;
    expect(render({ template, bookmarks: { a: 1 } })).to.equal(template);
  });
});
