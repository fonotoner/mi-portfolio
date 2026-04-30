// Configuración para WordPress REST API
export const WORDPRESS_CONFIG = {
  url: import.meta.env.WORDPRESS_URL || 'https://tu-sitio-wordpress.com',
  restBase: '/wp-json/wp/v2',
}

// Tipos para artículos de WordPress
export interface WordPressPost {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: string
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Record<string, unknown>
  categories: number[]
  tags: number[]
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      media_details?: {
        sizes?: Record<string, { source_url: string }>
      }
    }>
  }
}
