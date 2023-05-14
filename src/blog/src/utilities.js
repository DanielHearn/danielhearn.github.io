export const filterVisiblePosts = posts =>
  posts.filter(post => !post.frontmatter?.hidden)
