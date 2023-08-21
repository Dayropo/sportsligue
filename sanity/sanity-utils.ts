import { groq } from "next-sanity"
import { client } from "./sanity-client"
import { Author, Post } from "@/src/@types/typings"

export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"]{
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  "author": author->name,
  "authorSlug": author->slug.current,
  "category": category->slug.current,
  "subCategory": subCategory->slug.current,
  featured,
  publishedAt,
  body,
} | order(publishedAt desc)`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  "author": author->name,
  "authorSlug": author->slug.current,
  "category": category->slug.current,
  "subCategory": subCategory->slug.current,
  featured,
  publishedAt,
  body,
}`,
    { slug }
  )
}

export async function getAuthor(slug: string): Promise<Author> {
  return client.fetch(
    groq`*[_type == "author" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "image": image.asset->url,
  "slug": slug.current,
  bio,
}`,
    { slug }
  )
}
