import { allPosts } from "contentlayer/generated";

export function getPosts() {
  return allPosts;
}

export function getPostsbySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
