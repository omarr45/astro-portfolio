import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blogs: collection({
      label: 'Blogs',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        draft: fields.checkbox({ label: 'Draft' }),
        author: fields.select({
          label: 'Author',
          options: [
            { label: 'Omar', value: 'Omar AbdulRahman' },
          ],
          defaultValue: 'Omar AbdulRahman'
        }),
        isArabic: fields.checkbox({ label: 'Is Arabic' }),
        categories: fields.array(fields.select({
          label: 'Category',
          options: [
            {label:"Development", value: "Development"},
            {label:"Books", value: "Books"},
            {label:"Religion", value: "Religion"},
            {label:"Travel", value: "Travel"},
            {label:"Recommendations", value: "Recommendations"},
          ],
          defaultValue: 'Development'
        }), { label: 'Categories', itemLabel: props => props.value }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/blog',
            publicPath: '../../assets/blog',
          },
        }),
      },
    }),
  },
});