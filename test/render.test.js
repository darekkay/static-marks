const { expect } = require("chai");

const render = require("../src/render.js");

describe("Render", () => {
  it("replaces placeholder with content", () => {
    const template = `foo-"%BOOKMARKS%"-bar`;
    expect(render({ a: 1 }, template)).to.contain('{"a":1}');
  });
  it("returns an error if the placeholder is not present", () => {
    const template = `foo-bar`;
    expect(render({ a: 1 }, template)).to.have.lengthOf(0);
  });
});
