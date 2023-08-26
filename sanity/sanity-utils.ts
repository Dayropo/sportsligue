import { groq } from "next-sanity"
import { client } from "./sanity-client"
import { Author, Category, Post } from "@/src/@types/typings"

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc)`,
    { next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE } }
  )
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
}`,
    { slug, next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE } }
  )
}


export async function getFeaturedPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && featured == true]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc)`,
    {
      next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE },
    }
  )
}

export async function getRelatedPosts(category: string, slug: string): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && category->title == $category && slug.current != $slug]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc)`,
    {
      category,
      slug,
      next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE },
    }
  )
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && category->title == $category]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc)`,
    {
      category,
      next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE },
    }
  )
}

export async function getPostsBySubCategory(
  subCategory: string
): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && subCategory->title == $subCategory]{
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  author->,
  category->,
  subCategory->,
  featured,
  publishedAt,
  body,
  tags,
} | order(publishedAt desc)`,
    {
      subCategory,
      next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE },
    }
  )
}

export async function getAuthor(slug: string): Promise<Author> {
  return client.fetch(
    groq`*[_type == "author" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  slug,
  image,
  bio,
}`,
    { slug, next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE } }
  )
}

export async function getCategoryByTitle(title: string): Promise<Category> {
  return client.fetch(
    groq`
    *[_type == "category" && title == $title][0]{
    _id,
    _createdAt,
    title,
    slug,
    "subCategories": subCategories[]-> {
      _id,
      _createdAt,
      title,
      slug,
      }
    }
  `,
    { title, next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE } }
  )
}
