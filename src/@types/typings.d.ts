import { PortableTextBlock } from "sanity"

type Base = {
  _id: string
  _createdAt: Date
}

interface Post extends Base {
  title: string
  slug: Slug
  mainImage: Image
  author: Author
  category: Category
  subCategory: SubCategory
  featured: boolean
  publishedAt: Date
  body: PortableTextBlock[]
  tags: string[]
}

interface Author extends Base {
  name: string
  slug: Slug
  image: Image
  bio: PortableTextBlock[]
}

interface Category extends Base {
  title: string,
  slug: Slug,
  subCategories: SubCategory[]
}

interface SubCategory extends Base {
  title: string,
  slug: Slug
}

interface Image {
  _type: "image",
  asset: Reference,
  caption: string
}

interface Reference {
  _ref: string
  _type: "reference"
}

interface Slug {
  _type: "slug",
  current: string
}