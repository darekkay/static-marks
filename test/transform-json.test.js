const { expect } = require("chai");

const transform = require("../src/transform-json.js");

describe("YAML Converter", () => {
  it("converts yaml to json", () => {
    const yaml = {
      Collection: [
        {
          Bucket: [
            {
              "Link 1": "https://example.com"
            },
            {
              "Link 2": [
                "https://example.org",
                "Note 1",
                { "Note 2": "https://example.com" }
              ]
            }
          ]
        }
      ],
      "Second collection": [
        {
          Bucket: [{ Link: ["https://example.com"] }]
        }
      ]
    };

    const expected = [
      {
        title: "Collection",
        buckets: [
          {
            title: "Bucket",
            links: [
              {
                title: "Link 1",
                url: "https://example.com"
              },
              {
                title: "Link 2",
                url: "https://example.org",
                notes: [
                  { title: "Note 1" },
                  {
                    title: "Note 2",
                    url: "https://example.com"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Second collection",
        buckets: [
          {
            title: "Bucket",
            links: [
              {
                title: "Link",
                url: "https://example.com"
              }
            ]
          }
        ]
      }
    ];

    expect(transform(yaml)).to.deep.equal(expected);
  });
});
