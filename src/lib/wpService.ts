import { WORDPRESS_CONFIG, type WordPressPost } from './wordpress'

export async function getPosts(limit: number = 10): Promise<WordPressPost[]> {
  const url = new URL(`${WORDPRESS_CONFIG.url}${WORDPRESS_CONFIG.restBase}/posts`)
  url.searchParams.append('per_page', limit.toString())
  url.searchParams.append('_embed', 'true')
  url.searchParams.append('orderby', 'date')
  url.searchParams.append('order', 'desc')

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts from WordPress:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const url = new URL(`${WORDPRESS_CONFIG.url}${WORDPRESS_CONFIG.restBase}/posts`)
  url.searchParams.append('slug', slug)
  url.searchParams.append('_embed', 'true')

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`)
    }
    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error('Error fetching post from WordPress:', error)
    return null
  }
}
