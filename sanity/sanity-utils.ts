import { groq } from "next-sanity"
import { client } from "./sanity-client"
import { Author, Category, Post } from "@/src/@types/typings"
import { cache } from "react"

export const revalidate = 60

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
    { revalidate }
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
    { slug, revalidate }
  )
}

export async function getHeadlines(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && headline == true]{
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
    { revalidate }
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
    { revalidate }
  )
}

export async function getRelatedPosts(
  category: string,
  slug: string
): Promise<Post[]> {
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
      revalidate,
    }
  )
}

export async function getWorldPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && !(category->title in ["Football", "Tennis", "Basketball", "Boxing", "Formula 1", "American Football"])]{
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
    { revalidate }
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
    { category, revalidate }
  )
}

export async function getPostsByCategorySlug(slug: string): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && category->slug.current == $slug]{
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
    { slug, revalidate }
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
    { subCategory, revalidate }
  )
}

export async function getPostsBySubCategorySlug(slug: string): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && subCategory->slug.current == $slug]{
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
    { slug, revalidate }
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
    { slug, revalidate }
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
    { title, revalidate }
  )
}

export async function getOtherCategories(): Promise<Category[]> {
  return client.fetch(
    groq`
    *[_type == "category" && !(title in ["Football", "Tennis", "Basketball", "Boxing", "Formula 1", "American Football", "Athletics"])]{
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
    } | order(title asc)
  `,
    { revalidate }
  )
}
