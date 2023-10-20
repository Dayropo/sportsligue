import { getWorldPosts } from "@/sanity/sanity-utils"
import Posts from "./worldNews/Posts"
import { client } from "@/sanity/sanity-client"
import { groq } from "next-sanity"
import { Post } from "../@types/typings"

export default async function WorldNews() {
  const worldNews = await client.fetch<Post[]>(
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
    { next: { revalidate: 120 } }
  )

  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>World News</h1>
      </div>

      <Posts posts={worldNews} />
    </div>
  )
}
