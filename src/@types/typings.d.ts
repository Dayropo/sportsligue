import { PortableTextBlock } from "sanity"

type Base = {
  _id: string
  _createdAt: Date
  _updatedAt: Date
}

interface Post extends Base {
  title: string
  slug: string
  image: string
  author: string
  authorSlug: string
  category: string
  subCategory: string
  featured: boolean
  publishedAt: Date
  body: PortableTextBlock[]
}

interface Author extends Base {
  name: string
  image: string
  bio: PortableTextBlock[]
}
