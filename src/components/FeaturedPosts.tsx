import { getFeaturedPosts } from "@/sanity/sanity-utils"
import OwlCarouselWrapper from "./OwlCarouselWrapper"
import { client } from "@/sanity/sanity-client"
import { Post } from "../@types/typings"
import { groq } from "next-sanity"

export default async function FeaturedPosts() {
  const posts = await client.fetch<Post[]>(
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
    { cache: "force-cache", next: { revalidate: 30 } }
  )

  return (
    <div className="posts-block">
      <div className="title-section">
        <h1>Featured</h1>
      </div>

      <OwlCarouselWrapper
        posts={posts}
        noOfPosts={5}
        className="featured-box"
      />
    </div>
  )
}
