/* eslint-disable @typescript-eslint/no-explicit-any */
export type ThemeMode = 'light' | 'dark'

export interface Frontmatter {
  date: string
  title: string
  categories: string[]
  tags: string[]
  thumbnail: any
}

export interface Post {
  id: number
  excerpt: string
  body: string
  frontmatter: Frontmatter
  fields: {
    slug: string
  }
  timeToRead: number
}

export interface PageContext {
  tags?: string[]
  categories?: string[]
  categoryName: string
  tagName?: string
  posts?: Post[]
  next: any
  prev: any
}
