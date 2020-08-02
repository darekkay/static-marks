const { expect } = require("chai");

const transform = require("../src/transform-json.js");

describe("YAML Converter", () => {
  it("converts yaml to json", () => {
    const yaml = {
      Collection: [
        {
          Bucket: [
            {
              "Link 1": "https://example.com",
            },
            {
              "Link 2": [
                "https://example.org",
                "Note 1",
                { "Note 2": "https://example.com" },
              ],
            },
            "First level note",
          ],
        },
      ],
      "Second collection": [
        {
          Bucket: [{ Link: ["https://example.com"] }],
        },
      ],
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
                url: "https://example.com",
              },
              {
                title: "Link 2",
                url: "https://example.org",
                notes: [
                  { title: "Note 1" },
                  {
                    title: "Note 2",
                    url: "https://example.com",
                  },
                ],
              },
              { title: "First level note" },
            ],
          },
        ],
      },
      {
        title: "Second collection",
        buckets: [
          {
            title: "Bucket",
            links: [
              {
                title: "Link",
                url: "https://example.com",
              },
            ],
          },
        ],
      },
    ];

    expect(transform(yaml)).to.deep.equal(expected);
  });

  it("escapes URLs", () => {
    const yaml = {
      Collection: [
        {
          Bucket: [
            {
              // eslint-disable-next-line no-script-url
              "Link 1": "javascript:'<script></script>'",
            },
          ],
        },
      ],
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
                // eslint-disable-next-line no-script-url
                url: "javascript:'<script><\\/script>'",
              },
            ],
          },
        ],
      },
    ];

    expect(transform(yaml)).to.deep.equal(expected);
  });
});
