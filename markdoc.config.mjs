import { component, defineMarkdocConfig } from "@astrojs/markdoc/config";

import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  extends: [
    shiki({
      // Choose from Shiki's built-in themes (or add your own)
      // Default: 'github-dark'
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "css-variables",
      // Enable word wrap to prevent horizontal scrolling
      // Default: false
      wrap: true,
      // Pass custom languages
      // Note: Shiki has countless langs built-in, including `.astro`!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
    }),
  ],
  tags: {
    imageSlider: {
      render: component("./src/components/ImageSliderWrapper.astro"),
      attributes: {
        // Markdoc requires type defs for each attribute.
        // These should mirror the `Props` type of the component
        // you are rendering.
        // See Markdoc's documentation on defining attributes
        // https://markdoc.dev/docs/attributes#defining-attributes
        imgs: { type: "Array" },
      },
    },
    img: {
      render: component("./src/components/Image.astro"),
      attributes: {
        src: { type: "String" },
        alt: { type: "String" },
      },
    },
    bookCard: {
      render: component("./src/components/BookCard.astro"),
      attributes: {
        title: { type: String },
        author: { type: String },
        publisher: { type: String },
        nPages: { type: Number },
        reviewId: { type: String },
        myRating: {
          type: String,
          matches: [
            "A+",
            "A",
            "A-",
            "B+",
            "B",
            "B-",
            "C+",
            "C",
            "C-",
            "D+",
            "D",
            "D-",
            "F",
          ],
        },
        genres: { type: Array },
      },
    },
  },
});
