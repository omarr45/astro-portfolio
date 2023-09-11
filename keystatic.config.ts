import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    //  repo: {
    //   owner: 'omarr45',
    //   name: 'astro-portfolio'
    // }
  },
  collections: {
    blogs: collection({
      label: "Blogs",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date" }),
        draft: fields.checkbox({ label: "Draft" }),
        isArabic: fields.checkbox({ label: "Is Arabic" }),
        categories: fields.array(
          fields.select({
            label: "Category",
            options: [
              { label: "Development", value: "Development" },
              { label: "Books", value: "Books" },
              { label: "Religion", value: "Religion" },
              { label: "Travel", value: "Travel" },
              { label: "Recommendations", value: "Recommendations" },
            ],
            defaultValue: "Development",
          }),
          { label: "Categories", itemLabel: (props) => props.value },
        ),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/blog",
            publicPath: "../../assets/blog",
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        featured: fields.checkbox({ label: "Featured" }),
        draft: fields.checkbox({ label: "Draft" }),
        image: fields.image({
          label: "Image",
          directory: "src/assets/projects/",
          publicPath: "../../assets/projects/",
        }),
        description: fields.text({ label: "Description" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/projects",
            publicPath: "../../assets/projects",
          },
        }),
        links: fields.object(
          {
            github: fields.text({ label: "Github" }),
            live: fields.text({ label: "Live" }),
          },
          { label: "Links" },
        ),
        technologies: fields.array(
          fields.select({
            label: "Technology",
            options: [
              { label: "ReactJS", value: "ReactJS" },
              { label: "Canvas API", value: "Canvas API" },
              { label: "NFT", value: "NFT" },
              { label: "Blockchain", value: "Blockchain" },
              { label: "TypeScript", value: "TypeScript" },
              { label: "TailwindCSS", value: "TailwindCSS" },
              { label: "Firebase", value: "Firebase" },
              { label: "SASS", value: "SASS" },
              { label: "Admin Dashboard", value: "Admin Dashboard" },
              { label: "E-Commerce", value: "E-Commerce" },
              { label: "Open Source", value: "Open Source" },
              { label: "Dark Mode", value: "Dark Mode" },
              { label: "Design System", value: "Design System" },
            ],
            defaultValue: "ReactJS",
          }),
          { label: "Technologies", itemLabel: (props) => props.value },
        ),
      },
    }),
  },
});
