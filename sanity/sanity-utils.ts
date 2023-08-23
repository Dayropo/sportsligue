import { groq } from "next-sanity"
import { client } from "./sanity-client"
import { Author, Post } from "@/src/@types/typings"

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
}`,
    { slug, next: { revalidate: process.env.NEXT_PUBLIC_SANITY_REVALIDATE } }
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
} | order(publishedAt desc)`,
    {
      category,
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

