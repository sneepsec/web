import { getCollection } from "astro:content";

// Only return posts without `draft: true` in the frontmatter

export const latestPosts = (
  await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  })
).sort(
  (a, b) =>
    new Date(b.data.publishDate).valueOf() -
    new Date(a.data.publishDate).valueOf()
);


export const host = "https://raw.githubusercontent.com/sneepsec/web/main/";