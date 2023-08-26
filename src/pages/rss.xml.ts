import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function get(context) {
  const blogPosts = await getCollection("blog", ({ data }) => {
    return !data.draft && new Date(data.date) < new Date();
  });
  blogPosts.sort((a, b) => {
    return (new Date(b.data.date) as any) - (new Date(a.data.date) as any);
  });
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Omar's Blog",
    description: "Books, code, and other things I like to write about.",
    site: context.site,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      // customData: post.data.customData,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
