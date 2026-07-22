import type { BlogPost } from '~/types/blog'
import posts from '~/data/posts.json'

export function useBlogPosts(): BlogPost[] {
  return posts as BlogPost[]
}

export function useBlogPost(slug: string): BlogPost | undefined {
  return useBlogPosts().find(post => post.slug === slug)
}

export function formatBlogAuthors(authors: string[]): string {
  return authors.join('، ')
}
